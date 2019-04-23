import React from 'react'
import Label from './Label'
import Hint from './Hint'
import ErrorMessage from './ErrorMessage'

function Textarea(props) {
  var describedBy = props.describedBy
  if (props.hint) {
    const hintId = props.id + '-hint'
    describedBy += ' ' + hintId
    var hint = <Hint
      id={hintId}
      {...props.hint}
    />
  }

  if (props.errorMessage) {
    const errorId = props.id ? props.id + '-error' : '';
    describedBy += ' ' + errorId
    var errorMessage = <ErrorMessage
      id={errorId}
      {...props.errorMessage}
    />
  }

  return (

    <div className={`govuk-form-group${props.errorMessage ? ' govuk-form-group--error' : ''} ${props.formGroup ? props.formGroup.classes : ''}`}>
      <Label
        {...props.label}
      />
      {hint}
      {errorMessage}
      <textarea
        class={`govuk-textarea${props.errorMessage ? ' govuk-textarea--error' : ''}${props.classes ? ' ' + props.classes : ''}`}
        id={props.id}
        name={props.name}
        rows={props.rows}
        aria-describedby={describedBy}
        autocomplete={props.autocomplete}
        {...props.attributes}
      >
      </textarea>
    </div >

  )
}

export default Textarea