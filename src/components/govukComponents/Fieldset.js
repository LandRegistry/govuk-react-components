import React from 'react'

function Fieldset(props) {

  if (props.legend.html || props.legend.text) {
    var legend = <legend className={`govuk-fieldset__legend ${props.legend.classes ? ' ' + props.legend.classes : ''}`}>
      {props.legend.isPageHeading ?
        <h1 className="govuk-fieldset__heading">
          {props.legend.html ? props.legend.html : props.legend.text}
        </h1> : props.legend.html ? props.legend.html : props.legend.text}
    </legend>
  }

  return (
    <fieldset className={`govuk-fieldset${props.classes ? ' ' + props.classes : ''}`}
      aria-describedby={props.describedBy ? props.describedBy : null}
      {...props.attributes}
    >
      {legend}
      {props.children}
    </fieldset>
  )
}

Fieldset.defaultProps = {
  describedBy: ''
}

export default Fieldset
