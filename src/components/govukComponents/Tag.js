import React from 'react'

function Tag(props) {

  return (
    <strong className={`govuk-tag${props.classes ? ' ' + props.classes : ''}`} {...props.attribute}>
      {props.html ? props.html : props.text}
    </strong>
  )
}

export default Tag;