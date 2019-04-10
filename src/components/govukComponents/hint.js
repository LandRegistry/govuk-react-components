import React, { Component } from 'react'

function Hint(props) {

  return (
    <span id={props.id} className={`govuk-hint${props.classes ? ' ' + props.classes : ''}`}>
      {props.html ? props.html : props.text}
    </span>
  )
}

export default Hint