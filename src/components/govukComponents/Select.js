import React from 'react'
import Label from './Label'
import Hint from './Hint'
import ErrorMessage from './ErrorMessage'

function Select(props) {
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

  const selectedItem = props.items.find(item => item.selected === true)
  const defaultValue = selectedItem ? selectedItem.value : null

  const options = props.items.map((option, index) => (
    <option
      key={option.value + index}
      value={option.value}
      disabled={option.disabled}
    >
      {option.text}
    </option>
  ))

  return (

    <div className={`govuk-form-group${props.errorMessage ? ' govuk-form-group--error' : ''} ${(props.formGroup && props.formGroup.classes) || ''}`}>
      <Label
        {...props.label}
        for={props.id}
      />
      {hint}
      {errorMessage}
      <select
        className={`govuk-select ${props.classes}${props.errorMessage ? ' govuk-select--error' : ''}`}
        id={props.id}
        name={props.name}
        defaultValue={defaultValue}
        aria-describedby={describedBy.trim() || null}
        {...props.attributes}
      >
        {options}
      </select>
    </div>
  )
}

Select.defaultProps = {
  describedBy: '',
  classes: '',
}

export default Select
