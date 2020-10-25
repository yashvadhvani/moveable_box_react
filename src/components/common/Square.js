import React from 'react'
import './Common.css';
import { handleSelect } from '../../actions/shared'

import { useDispatch } from "react-redux";

export default function Square(props) {
  const dispatch = useDispatch();
  return (
    <div id={props.styles.zIndex} 
    className="square" 
    style={{...props.styles}}
    onClick = {() =>  dispatch(handleSelect(props.styles.zIndex))}>
    </div>
  )
}