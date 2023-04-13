import React from 'react'
import "./Buton.css"
import { useState } from 'react'

export default function Button(props) {

    let button = {
        display: "flex",
        flexDirection: "row",
        background: `${props.color}`,
        width: "fit-content",
        padding: "0.9rem",
        borderRadius: "36px",
        color: "white",
        justifyContent: "space-evenly",
        alignItems: "center",
        cursor: "pointer",
        minWidth: "6rem",
        margin: "3px"
    }

    const [btn, setbtn] = useState(button);

    const child = {
        color: `${props.xColor}`,
        background: `${props.color}`,
        fontFamily: "sans-serif",
    }

    const close = () => {
        props.test(props.children);
        button = {...button, visibility: "hidden"}
        setbtn(button)
        console.log(button)
    }

  return (
    <div style={btn}>
    <div style={{background:`${props.color}`}}>{props.children}&nbsp;&nbsp;</div>
    <div style={child} className='X' onClick={close}>X</div>
    </div>
  )
}
