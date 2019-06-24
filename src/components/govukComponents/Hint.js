import React, { Component } from 'react'

function Hint(props) {

  return (
    <span id={props.id} className={`govuk-hint ${props.classes}`}>
      {props.html ? props.html : props.text}
    </span>
  )
}

Hint.defaultProps = {
  classes: ''
}

export default Hint
