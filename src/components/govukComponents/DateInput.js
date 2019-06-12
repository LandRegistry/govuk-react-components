import React from 'react'
import Hint from './Hint'
import ErrorMessage from './ErrorMessage'
import Fieldset from './Fieldset'
import Input from './Input'

function DateInput(props) {

  var describedBy = props.fieldset && props.fieldset.describedBy ? props.fieldset.describedBy : ''

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
  var dateInputItems = []
  if (props.items) {
    dateInputItems = props.items
  } else {
    dateInputItems = [
      {
        name: "day",
        classes: "govuk-input--width-2",
        type: "text"
      },
      {
        name: "month",
        classes: "govuk-input--width-2",
        type: "text"
      },
      {
        name: "year",
        classes: "govuk-input--width-4",
        type: "text"
      }
    ]
  }

  const items = dateInputItems.map((item, index) =>
    <div key={item.name + index} className="govuk-date-input__item">
      <Input
        label={{
          text: item.label ? item.label.charAt(0).toUpperCase() + item.label.slice(1) : item.name.charAt(0).toUpperCase() + item.name.slice(1),
          classes: "govuk-date-input__label"
        }}
        id={item.id ? item.id : (props.id + "-" + item.name)}
        classes={"govuk-date-input__input " + (item.classes ? ' ' + item.classes : '')}
        name={props.namePrefix ? (props.namePrefix + "-" + item.name) : item.name}
        value={item.value}
        type="number"
        autocomplete={item.autocomplete}
        pattern={item.pattern ? item.pattern : "[0-9]*"}
        attributes={item.attributes}
      />
    </div>
  )
  const innerHtml = <>
    {hint}
    {errorMessage}
    <div className={`govuk-date-input${props.classes ? ' ' + props.classes : ''}`}
      {...props.attributes}
      id={props.id}>
      {items}
    </div>
  </>

  return (

    <div className={`govuk-form-group${props.errorMessage ? ' govuk-form-group--error' : ''}${props.formGroup ? ' ' + props.formGroup.classes : ''}`}>
      {props.fieldset ? <Fieldset
        describedBy={describedBy}
        classes={props.fieldset.classes}
        attributes={{
          role: "group"
        }}
        legend={props.fieldset.legend}>
        {innerHtml}
      </Fieldset>
        : <>{innerHtml}</>}
    </div>
  )
}

DateInput.defaultProps = {
}

export default DateInput

