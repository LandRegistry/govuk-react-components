import React from 'react'

function Button(props) {

  var element = '';

  if (props.element) {
    element = props.element
  } else if (props.href) {
    element = 'a'
  } else {
    element = 'button'
  }

  const commonAttributes = { className: 'govuk-button' + (props.classes ? ' ' + props.classes : '') + (props.disabled ? ' govuk-button--disabled' : ''), ...props.attributes }

  const buttonAttributes = { name: props.name, type: props.type }

  if (element === 'a') {
    var button = <a href={props.href} role="button" draggable="false" {...commonAttributes}>
      {props.html ? props.html : props.text}
    </a>
  } else if (element === 'button') {
    var button = <button value={props.value} {...buttonAttributes} {...commonAttributes}>
      {props.html ? props.html : props.value}
    </button >
  }

  return button
}

Button.defaultProps = {
  value: 'Submit'
}

export default Button