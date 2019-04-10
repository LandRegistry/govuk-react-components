import React from 'react'

function ErrorMessage(props) {

  if (props.visuallyHiddenText) {
    var visuallyHiddenText = <span className="govuk-visually-hidden">{props.visuallyHiddenText}</span>
  }

  return (
    <span id={props.id} className={`govuk-error-message${props.classes ? ' ' + props.classes : ''}`} {...props.attributes}>
      {visuallyHiddenText}
      {props.html ? props.html : props.text}
    </span>
  )
}

ErrorMessage.defaultProps = {
  visuallyHiddenText: "Error "
}

export default ErrorMessage