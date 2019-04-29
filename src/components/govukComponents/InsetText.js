import React from 'react'

function InsetText(props) {

  return (
    <div
      id={props.id}
      className={`govuk-inset-text${props.classes ? props.classes : ''}`}
      {...props.attributes}
    >
      {props.html ? props.html : props.text}
    </div>
  )
}

export default InsetText;