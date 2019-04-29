import React from 'react'

function Details(props) {

  return (
    <details id={props.id} className={`govuk-details${props.classes ? ' ' + params.classes : ''}`} {...props.attributes} {...open}>
      <summary className="govuk-details__summary">
        <span className="govuk-details__summary-text">
          {props.summaryHtml ? props.summaryHtml : props.summaryText}
        </span>
      </summary>
      <div className="govuk-details__text">
        {props.html ? props.html : props.text}
      </div>
    </details >

  )
}

export default Details