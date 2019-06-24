import React from 'react'
import Label from './Label'
import Hint from './Hint'
import ErrorMessage from './ErrorMessage'

function Textarea(props) {
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

    <div className={`govuk-form-group${props.errorMessage ? ' govuk-form-group--error' : ''} ${(props.formGroup && props.formGroup.classes) || ''}`}>
      <Label
        {...props.label}
        for={props.id}
      />
      {hint}
      {errorMessage}
      <textarea
        className={`govuk-textarea${props.errorMessage ? ' govuk-textarea--error' : ''} ${props.classes}`}
        id={props.id}
        defaultValue={props.value}
        name={props.name}
        rows={props.rows}
        aria-describedby={describedBy.trim() || null}
        autoComplete={props.autocomplete}
        {...props.attributes}
      />
    </div>

  )
}

Textarea.defaultProps = {
  describedBy: '',
  rows: 5,
  classes: '',
}

export default Textarea
