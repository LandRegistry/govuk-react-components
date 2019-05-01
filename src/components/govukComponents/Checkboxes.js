import React, { useEffect } from 'react'
import CheckboxesJS from 'govuk-frontend/components/checkboxes/checkboxes'
import ErrorMessage from './ErrorMessage'
import Fieldset from './Fieldset'
import Hint from './Hint'
import Label from './Label'

function Checkboxes(props) {

  const checkboxRef = React.createRef();

  useEffect(() => {
    new CheckboxesJS(checkboxRef.current).init()
  }, [])

  var idPrefix = props.idPrefix ? props.idPrefix : props.name
  var describedBy = props.describedBy
  var hint
  var errorMessage

  if (props.hint) {
    var hintId = idPrefix + '-hint';
    describedBy += ' ' + hintId;

    hint = <Hint id={hintId} {...props.hint} aria-describedby={describedBy} />
  }

  // Find out if we have any conditional items
  const conditional = !!props.items.find(item => item.conditional)

  if (props.errorMessage) {
    var errorId = idPrefix + '-error';
    describedBy += ' ' + errorId;
    errorMessage = <ErrorMessage id={errorId} {...props.errorMessage} />
  }

  const innerHtml = <>
    {hint}
    {errorMessage}

    <div className={`govuk-checkboxes${props.classes ? ' ' + props.classes : ''}`}
      {...props.attributes}
      ref={checkboxRef}
      data-module={conditional ? 'checkboxes' : null}
    >
      {props.items.map((checkbox, index) =>
        <React.Fragment key={props.name + index}><div className="govuk-checkboxes__item">
          <input
            className="govuk-checkboxes__input"
            id={idPrefix + '-' + (index + 1)}
            name={props.name}
            type="checkbox"
            value={checkbox.value}
            defaultChecked={checkbox.checked}
            data-aria-controls={checkbox.conditional ? `conditional-${idPrefix}-${index + 1}` : null}
            aria-describedby={checkbox.hint ? `${idPrefix}-${index + 1}-item-hint` : null}
            disabled={checkbox.disabled}
          />
          <Label text={checkbox.text} classes="govuk-checkboxes__label" for={idPrefix + '-' + (index + 1)} />
          {checkbox.hint ? <Hint classes="govuk-checkboxes__hint" {...checkbox.hint} id={`${idPrefix}-${index + 1}-item-hint`} /> : ''}
        </div>
          {checkbox.conditional ? <div
            className={`govuk-checkboxes__conditional ${checkbox.checked ? '' : 'govuk-checkboxes__conditional--hidden'}`}
            id={`conditional-${idPrefix}-${index + 1}`}
          >
            {checkbox.conditional.html}
          </div> : ''}</React.Fragment>
      )}
    </div>
  </>

  return (
    <div className={`govuk-form-group${props.errorMessage ? ' govuk-form-group--error' : ''} ${props.formGroup ? props.formGroup.classes : ''}`} >
      {props.fieldset ? <Fieldset describedBy={describedBy} {...props.fieldset}>
        {innerHtml}
      </Fieldset> : innerHtml}
    </div>
  )
}

Checkboxes.defaultProps = {
  describedBy: ''
}

export default Checkboxes
