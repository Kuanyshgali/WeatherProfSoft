import React, {useEffect, useState, Children, cloneElement, FC, JSXElementConstructor, useRef, RefObject} from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import styles from './carousel.module.scss'
import Page from "./Page";
import {useActions, useAppSelector} from "../../hooks";


interface CarouselProps {
    Page: FC<React.PropsWithChildren>
}

export const Carousel: FC<React.PropsWithChildren> & CarouselProps = ({children}) => {
    const {width} = useAppSelector(state => state.width)
    const {setWidth} = useActions()
    const [offset, setOffset] = useState<number>(0)
    const windowElRef = useRef<HTMLDivElement>(null)

    const handleLeftArrowClick = () => {
        setOffset((currentOffset:number) => {
            const newOffset: number = currentOffset + width
            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () => {
        setOffset((currentOffset:number) => {
            const newOffset: number = currentOffset - width
            const maxOffset: number = -(width * (6))
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        const resizeHandler = () => {
            const _width: number = windowElRef.current ? windowElRef.current.offsetWidth : 0
            setWidth(_width)
            setOffset(0)
        }

        resizeHandler()

        window.addEventListener('resize', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])


    return (
        <div className={styles.container}>
            <FaChevronLeft className={styles.arrow} onClick={handleLeftArrowClick}/>
            <div className={styles.window} ref={windowElRef}>
                <div className={styles.window__pages} style={{transform: `translateX(${offset}px)`}}>
                    {children}
                </div>
            </div>
            <FaChevronRight className={styles.arrow} onClick={handleRightArrowClick}/>
        </div>
    )
}

Carousel.Page = Page
