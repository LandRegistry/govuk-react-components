import React from 'react'

function ErrorSummary(props) {

  if (props.descriptionHtml || props.descriptionText) {
    var description = <p>
      {props.descriptionHtml ? props.descriptionHtml : props.descriptionText}}
    </p>
  }
  return (
    <div class={`govuk-error-summary${props.classes ? ' ' + props.classes : ''}`}
      aria-labelledby="error-summary-title"
      role="alert"
      tabIndex="-1"
      {...props.attributes}
      data-module="error-summary"
    >
      <h2 class="govuk-error-summary__title" id="error-summary-title">
        {props.titleHtml ? props.titleHtml : props.titleText}
      </h2>
      <div class="govuk-error-summary__body">
        {description}
        <ul class="govuk-list govuk-error-summary__list">
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

export default ErrorSummary