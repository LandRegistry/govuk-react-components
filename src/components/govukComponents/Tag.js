import React from 'react'

function Tag(props) {
  return (
    <strong className={`govuk-tag ${props.classes}`} {...props.attributes}>
      {props.html ? props.html : props.text}
    </strong>
  )
}

Tag.defaultProps = {
  classes: '',
}

export default Tag;
