import React from 'react'

export default function Button(props) {
  return (
    <button className="button button2" onClick={props.onClick}>{props.text}</button>
  )
}
