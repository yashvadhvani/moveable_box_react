import React from 'react'
import './Common.css';
import { selectSquare } from '../../actions/squares'

import { useDispatch } from "react-redux";

export default function Square(props) {
  const dispatch = useDispatch();
  return (
    <div id={props.styles.zIndex} 
    className="square" 
    style={{...props.styles}}
    onClick = {() =>  dispatch(selectSquare(props.styles.zIndex))}>
    </div>
  )
}