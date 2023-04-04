import React from 'react'

export default function Warnings(props) {
  return (
    <span style={{color: "yellow", fontSize: "12px"}}>{props.message}</span>
  )
}
