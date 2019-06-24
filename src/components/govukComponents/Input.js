import React from 'react'
import Label from './Label'
import Hint from './Hint'
import ErrorMessage from './ErrorMessage'

function Input(props) {
  let { describedBy } = props

  if (props.hint) {
    const hintId = `${props.id}-hint`
    describedBy += ` ${hintId}`
    var hint = (
      <Hint
        id={hintId}
        {...props.hint}
      />
    )
  }

  if (props.errorMessage) {
    const errorId = props.id ? `${props.id}-error` : '';
    describedBy += ` ${errorId}`
    var errorMessage = (
      <ErrorMessage
        id={errorId}
        {...props.errorMessage}
      />
    )
  }

  return (
    <div className={`govuk-form-group ${(props.formGroup && props.formGroup.classes) || ''} ${props.errorMessage ? 'govuk-form-group--error' : ''} `}>
      <Label
        {...props.label}
        for={props.id}
      />
      {hint}
      {errorMessage}
      <input
        className={`govuk-input ${props.classes} ${props.errorMessage ? ' govuk-input--error' : ''}`}
        id={props.id}
        name={props.name ? props.name : props.id}
        type={props.type}
        defaultValue={props.value}
        aria-describedby={describedBy || null}
        autoComplete={props.autocomplete}
        pattern={props.pattern}
        {...props.attributes}
      />
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  describedBy: '',
  classes: '',
}

export default Input
