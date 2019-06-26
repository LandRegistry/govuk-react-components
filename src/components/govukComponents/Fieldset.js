import React from 'react'
import PropTypes from 'prop-types'

function Fieldset(props) {
  var legend
  if (props.legend.html || props.legend.text) {
    legend = (
      <legend className={`govuk-fieldset__legend ${props.legend.classes || ''}`}>
        {props.legend.isPageHeading
          ? (
            <h1 className="govuk-fieldset__heading">
              {props.legend.html || props.legend.text}
            </h1>
          ) : props.legend.html || props.legend.text}
      </legend>
    )
  }

  return (
    <fieldset
      className={`govuk-fieldset ${props.classes}`}
      aria-describedby={props.describedBy ? props.describedBy : null}
      {...props.attributes}
    >
      {legend}
      {props.children}
    </fieldset>
  )
}

Fieldset.defaultProps = {
  describedBy: '',
  classes: '',
}

Fieldset.propTypes = {
  legend: PropTypes.object,
  classes: PropTypes.string,
  describedBy: PropTypes.string,
  attributes: PropTypes.object,
  children: PropTypes.element.isRequired,
}

export default Fieldset
