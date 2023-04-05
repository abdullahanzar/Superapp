import React from 'react'

export default function Error(props) {
  return (
    <span style={{color: "red", fontSize: "15px"}}>{props.message}</span>
  )
}
