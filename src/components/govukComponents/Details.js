import React from 'react'
import PropTypes from 'prop-types'

function Details(props) {
  return (
    <details id={props.id} className={`govuk-details ${props.classes}`} {...props.attributes} open={props.open}>
      <summary className="govuk-details__summary">
        <span className="govuk-details__summary-text">
          {props.summaryHtml || props.summaryText}
        </span>
      </summary>
      <div className="govuk-details__text">
        {props.html || props.text}
      </div>
    </details>

  )
}

Details.defaultProps = {
  classes: '',
}

Details.propTypes = {
  attributes: PropTypes.object,
  classes: PropTypes.string,
  html: PropTypes.node,
  id: PropTypes.string,
  open: PropTypes.bool,
  summaryHtml: PropTypes.string,
  summaryText: PropTypes.string,
  text: PropTypes.node,
}

export default Details
