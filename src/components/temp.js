// useEffect(() => {
  //   const handleKeyDown = event => {
  //     const { key } = event;
  //     const top = parseInt(style.top.substring(0, style.top.length - 2), 10);
  //     const left = parseInt(style.left.substring(0, style.left.length - 2), 10);
  //     if (ALLOWED_KEYS.includes(key)) {
  //       //  console.log();
  //       switch (key) {
  //         case ALLOWED_KEYS[0]:
  //           if (top > 0) {
  //             setStyle({
  //               top: `${top - 5}px`,
  //               left: style.left
  //             })
  //           }
  //           break;
  //         case ALLOWED_KEYS[1]:
  //           if (top + 200 < 790) {
  //             setStyle({
  //               top: `${top + 5}px`,
  //               left: style.left
  //             })
  //           }
  //           break;
  //         case ALLOWED_KEYS[2]:
  //           if (left > 0) {
  //             setStyle({
  //               top: style.top,
  //               left: `${left - 5}px`
  //             })
  //           }
  //           break;
  //         case ALLOWED_KEYS[3]:
  //           if (left + 200 < window.innerWidth - 40) {
  //             setStyle({
  //               top: style.top,
  //               left: `${left + 5}px`
  //             })
  //           }
  //           break;
  //       }
  //     }
  //   };

  //   const handleKeyUp = event => {
  //     const { key } = event
  //     //  setPressed(pressed.filter(k => k !== key))
  //   };

  //   document.addEventListener('keydown', handleKeyDown)

  //   return () => {
  //     document.removeEventListener('keydown', handleKeyDown)
  //     document.removeEventListener('keyup', handleKeyUp)
  //   }
  // }, [selected, style])


// import React, { useState, useEffect } from 'react'
// import Button from './common/Button'
// import Square from './common/Square'
// import './Dashboard.css';

// const ALLOWED_KEYS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

// const addSquare = (zIndex, setZIndex, squares, setSquares) =>{
  
// }
// export default function Dashboard(props) {
//   const [selected, setSelected] = useState('');
//   const [zIndex, setZIndex] = useState(0);
//   const [squares, setSquares] = useState({})

//   return (
//     <div>
//       <div id="fence" className="fence" >
//         <Square zIndex={zIndex} setSelected={setSelected} styleProp={style}  />
//         <Square zIndex="200" setSelected={setSelected} />

//       </div>
//       <Button text="Add Square" onClick ={() => addSquare(zIndex, setZIndex, squares, setSquares)} />
//     </div>
//   )
// }
