import React from 'react'
import PropTypes from 'prop-types'

function Hint(props) {
  return (
    <div id={props.id} className={`govuk-hint ${props.classes}`}>
      {props.html || props.text}
    </div>
  )
}

Hint.defaultProps = {
  classes: '',
}

Hint.propTypes = {
  classes: PropTypes.string,
  html: PropTypes.node,
  id: PropTypes.string,
  text: PropTypes.node,
}

export default Hint
