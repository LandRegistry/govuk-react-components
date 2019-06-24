import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import Link from '../utils/Link.js'
import ButtonJS from 'govuk-frontend/components/button/button'

function Button(props) {

  const buttonRef = React.createRef();

  useEffect(() => {
    // ReactDOM.findDOMNode necessary as this might otherwise be invoked directly with a react-router <Link> object.
    new ButtonJS(ReactDOM.findDOMNode(buttonRef.current)).init()
  }, [])

  var element = '';

  if (props.element) {
    element = props.element
  } else if (props.href) {
    element = 'a'
  } else {
    element = 'button'
  }

  const commonAttributes = {
    className: 'govuk-button ' + props.classes + (props.disabled ? ' govuk-button--disabled' : ''),
    ...props.attributes,
    ref: buttonRef
  }

  var buttonAttributes = { name: props.name, type: props.type }

  if (props.preventDoubleClick) {
    buttonAttributes['data-prevent-double-click'] = props.preventDoubleClick
  }

  if (props.disabled) {
    buttonAttributes = {
      ...buttonAttributes,
      'aria-disabled': true,
      'disabled': 'disabled'
    }
  }

  var button
  if (element === 'a') {

    const linkAttributes = {
      ...commonAttributes,
      classes: commonAttributes.className,
      attributes: {
        role: 'button',
        draggable: 'false'
      },
      href: props.href,
      to: props.to
    }

    button = <Link {...linkAttributes}>
      {props.html ? props.html : props.text}
    </Link>

  } else if (element === 'button') {
    button = <button {...buttonAttributes} {...commonAttributes}>
      {props.html ? props.html : props.text}
    </button >
  } else if (element === 'input') {
    button = <input value={props.text} {...buttonAttributes} {...commonAttributes} />
  }

  return button
}

Button.defaultProps = {
  type: 'submit',
  classes: ''
}

export default Button
