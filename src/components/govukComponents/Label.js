import React from 'react'

function Label(props) {
  if (props.html || props.text) {
    var label = (
      <label className={`govuk-label ${props.classes}`} {...props.attributes} htmlFor={props.for}>
        {props.html ? props.html : props.text}
      </label>
    )
  }

  if (props.isPageHeading === true) {
    var pageheading = <h1 className="govuk-label-wrapper">{label}</h1>
  }

  return pageheading || label
}

Label.defaultProps = {
  classes: '',
}

export default Label
