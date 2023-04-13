import React, {useState} from 'react'
import './Card.css'

export default function(props) {
    let [cardStyle, setCardStyle] = useState({
      background: props.color,
  }) 
    let [imageStyle, setImageStyle] = useState({
      borderColor: props.color,
  }) 
    const select = () => {
      setCardStyle(prev=>({...prev, border: "5px solid #11B800"}))
      setImageStyle(prev=>{return {...prev, width: "8.5rem",
        maxWidth: "9.5rem",
        borderRadius: "11.66px",
        position: "relative",
        top: "1.7rem",
        left: "0.5rem",
        filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.55))"}})
    }

  return (
    <div className='card' style={cardStyle} onClick={select}>
        <div className="card_name">{props.children}</div>
        <img src={props.source} style={imageStyle} alt="PICTURE" />
    </div>
  )
}
