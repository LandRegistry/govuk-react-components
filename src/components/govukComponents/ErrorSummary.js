import React from 'react'

function ErrorSummary(props) {

  if (props.descriptionHtml || props.descriptionText) {
    var description = <p>
      {props.descriptionHtml ? props.descriptionHtml : props.descriptionText}
    </p>
  }
  return (
    <div className={`govuk-error-summary ${props.classes}`}
      aria-labelledby="error-summary-title"
      role="alert"
      tabIndex="-1"
      {...props.attributes}
      data-module="error-summary"
    >
      <h2 className="govuk-error-summary__title" id="error-summary-title">
        {props.titleHtml ? props.titleHtml : props.titleText}
      </h2>
      <div className="govuk-error-summary__body">
        {description}
        <ul className="govuk-list govuk-error-summary__list">
          {props.errorList.map((error, index) =>
            <li key={error.href + index}>
              {
                error.href ?
                  <a href={error.href} {...error.attributes}>{error.html ? error.html : error.text}</a>
                  : <>{error.html ? error.html : error.text}</>
              }
            </li>)
          }
        </ul>
      </div>
    </div>
  )
}

ErrorSummary.defaultProps = {
  classes: ''
}

export default ErrorSummary
