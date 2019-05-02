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

  const idPrefix = props.idPrefix ? props.idPrefix : props.name
  var describedBy = ''
  var hint
  var errorMessage

  if (props.hint) {
    var hintId = idPrefix + '-hint';
    describedBy += ' ' + hintId;

    hint = <Hint id={hintId} {...props.hint} aria-describedby={describedBy} />
  }

  // Find out if we have any conditional items
  const isConditional = !!props.items.find(item => item.conditional)
  const hasFieldset = !!props.fieldset

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
      data-module={isConditional ? 'checkboxes' : null}
    >
      {props.items.map((item, index) => {
        const id = item.id ? item.id : `${idPrefix}-${index + 1}`
        const name = item.name ? item.name : props.name
        const conditionalId = item.conditional ? 'conditional-' + id : null
        const hasHint = item.hint && (item.hint.text || item.hint.html)
        const itemHintId = id + '-item-hint'

        var itemDescribedBy = ''

        if (!hasFieldset) {
          itemDescribedBy = describedBy
        }

        if (item.hint) {
          itemDescribedBy += ' ' + itemHintId
        }

        return <React.Fragment key={props.name + index}>
          <div className="govuk-checkboxes__item">
            <input
              className="govuk-checkboxes__input"
              id={id}
              name={name}
              type="checkbox"
              value={item.value}
              defaultChecked={item.checked}
              data-aria-controls={conditionalId}
              aria-describedby={itemDescribedBy ? itemDescribedBy : null}
              disabled={item.disabled}
            />
            <Label text={item.text} classes="govuk-checkboxes__label" for={id} />
            {item.hint ? <Hint classes="govuk-checkboxes__hint" {...item.hint} id={itemHintId} /> : ''}
          </div>

          {item.conditional ? <div
            className={`govuk-checkboxes__conditional ${item.checked ? '' : 'govuk-checkboxes__conditional--hidden'}`}
            id={conditionalId}
          >
            {item.conditional.html}
          </div> : ''}
        </React.Fragment>
      })}
    </div>
  </>

  return (
    <div className={`govuk-form-group${props.errorMessage ? ' govuk-form-group--error' : ''} ${props.formGroup ? props.formGroup.classes : ''}`} >
      {hasFieldset ? <Fieldset describedBy={describedBy} {...props.fieldset}>
        {innerHtml}
      </Fieldset> : innerHtml}
    </div>
  )
}

export default Checkboxes
