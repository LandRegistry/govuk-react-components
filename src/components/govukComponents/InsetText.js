import React from 'react'

function InsetText(props) {
  return (
    <div
      id={props.id}
      className={`govuk-inset-text ${props.classes}`}
      {...props.attributes}
    >
      {props.html || props.text}
    </div>
  )
}

InsetText.defaultProps = {
  classes: '',
}

export default InsetText;
