import React from 'react'
import PropTypes from 'prop-types'

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

InsetText.propTypes = {
  attributes: PropTypes.object,
  classes: PropTypes.string,
  html: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
}

export default InsetText;
