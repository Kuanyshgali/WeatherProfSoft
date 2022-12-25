import {useDispatch} from "react-redux";
import {bindActionCreators} from '@reduxjs/toolkit'
import {locationAction} from "../store/location/location.slice";
import {widthAction} from "../store/carouselPageWidth/carouselPageWidth.slice";

const actions = {
  ...locationAction,
  ...widthAction
}

const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}

export {useActions}