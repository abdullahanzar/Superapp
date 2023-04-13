import React, {useState, useEffect} from 'react'
import './Card.css'

export default function(props) {
    let [clicks, setClicks] = useState(0)

    let [cardStyle, setCardStyle] = useState({
      background: props.color,
  }) 
    let [imageStyle, setImageStyle] = useState({
      borderColor: props.color,
  }) 
    const select = () => {
      setClicks(prev=>prev+1)
      if(clicks%2==0) {
      props.isSelect(props.children, true)
      setCardStyle(prev=>({...prev, border: "5px solid #11B800"}))
      setImageStyle(prev=>{return {...prev, width: "8.5rem",
        maxWidth: "9.5rem",
        borderRadius: "11.66px",
        position: "relative",
        top: "1.7rem",
        left: "0.5rem",
        filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.55))"}})
      }
      else {
        props.isSelect(props.children, false)
        setCardStyle(prev=>({...prev, border: "none"}));
        setImageStyle(prev=>({...prev, width: "9rem",
        maxWidth: "9.5rem",
        borderRadius: "11.66px",
        position: "relative",
        top: "1.7rem",
        left: "0.5rem",
        filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.55))"}))
      }
    }

    
     useEffect(()=>{
       if(props.showState==false) {
       setCardStyle(prev=>({...prev, border: "none"}));
        setImageStyle(prev=>({...prev, width: "9rem",
        maxWidth: "9.5rem",
        borderRadius: "11.66px",
        position: "relative",
        top: "1.7rem",
        left: "0.5rem",
        filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.55))"}))
        if(clicks%2!=0)
        setClicks(prev=>prev+1)
       }
     }, [props.showState])

  return (
    <div className='card' style={cardStyle} onClick={select}>
        <div className="card_name">{props.children}</div>
        <img src={props.source} style={imageStyle} alt="PICTURE" />
    </div>
  )
}
