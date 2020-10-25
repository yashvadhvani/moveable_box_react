import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Button from './common/Button'
import Square from './common/Square'
import { handleSelect } from '../actions/shared'
import { handleKey } from '../actions/squares'
import './Dashboard.css';

// const ALLOWED_KEYS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];



export default function Dashboard() {
  const dispatch = useDispatch();
  const { selected, squares } = useSelector(state => ({
    squares: state.squares,
    selected: state.selected,
  }));
  useEffect(() => {
    const handleKeyDown = event => {
      const { key } = event;
      dispatch(handleKey(key))
    };
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div>
      <div id="fence" className="fence" >
      {
        Object.keys(squares).map((square)=> <Square key={square} styles={squares[square]} />)
      }
      </div>
      <Button text="Add Square" onClick={() => dispatch(handleSelect())} />
    </div>
  )
}

