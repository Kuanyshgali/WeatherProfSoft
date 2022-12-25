import React, {FC, useContext} from 'react'
import './Page.scss'
import {useAppSelector} from "../../../hooks";

export const Page: FC<React.PropsWithChildren> = ({children}) => {
  const { width } = useAppSelector(state => state.width)
  return (
    <div
      className="page__main-container"
      style={{
        minWidth: `${width}px`,
        maxWidth: `${width}px`,
      }}
    >
      {children}
    </div>
  )
}
