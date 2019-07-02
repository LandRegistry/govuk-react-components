import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import ButtonJS from 'govuk-frontend/components/button/button'
import Link from '../utils/Link'

function Button(props) {
  const buttonRef = React.createRef()
  let element = ''
  let buttonAttributes = {name: props.name, type: props.type}
  let button

  useEffect(() => {
    new ButtonJS(buttonRef.current).init()
  }, [])

  if (props.element) {
    element = props.element
  } else if (props.href) {
    element = 'a'
  } else {
    element = 'button'
  }

  const commonAttributes = {
    className: `govuk-button ${props.classes}${props.disabled ? ' govuk-button--disabled' : ''}`,
    ...props.attributes,
    ref: buttonRef,
  }


  if (props.preventDoubleClick) {
    buttonAttributes['data-prevent-double-click'] = props.preventDoubleClick
  }

  if (props.disabled) {
    buttonAttributes = {
      ...buttonAttributes,
      'aria-disabled': true,
      disabled: 'disabled',
    }
  }

  if (element === 'a') {
    const linkAttributes = {
      ...commonAttributes,
      classes: commonAttributes.className,
      attributes: {
        role: 'button',
        draggable: 'false',
      },
      href: props.href,
      to: props.to,
    }

    button = (
      <Link {...linkAttributes}>
        {props.html || props.text}
      </Link>
    )
  } else if (element === 'button') {
    button = (
      // Disabling linting of button type, because the button _does_ have an explicit type
      // It is defined in the defaultProps of the component, which gets added
      // to the buttonAttributes. eslint fails to detect this, and so we need to
      // disable the linting rule
      //
      // eslint-disable-next-line react/button-has-type
      <button {...buttonAttributes} {...commonAttributes}>
        {props.html || props.text}
      </button>
    )
  } else if (element === 'input') {
    button = <input value={props.text} {...buttonAttributes} {...commonAttributes} />
  }

  return button
}

Button.defaultProps = {
  type: 'submit',
  classes: '',
}

Button.propTypes = {
  attributes: PropTypes.object,
  disabled: PropTypes.bool,
  element: PropTypes.string,
  href: PropTypes.string,
  html: PropTypes.node,
  name: PropTypes.string,
  preventDoubleClick: PropTypes.bool,
  text: PropTypes.node,
  to: PropTypes.string,
  type: PropTypes.string,
}

export default Button
