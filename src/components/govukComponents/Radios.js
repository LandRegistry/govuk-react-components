import React, { useEffect } from 'react'
import RadiosJS from 'govuk-frontend/components/radios/radios'
import ErrorMessage from './ErrorMessage'
import Fieldset from './Fieldset'
import Hint from './Hint'
import Label from './Label'

function Radios(props) {

  const radioRef = React.createRef();

  useEffect(() => {
    new RadiosJS(radioRef.current).init()
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

    <div className={`govuk-radios${props.classes ? ' ' + props.classes : ''}${isConditional ? ' govuk-radios--conditional' : ''}`}
      {...props.attributes}
      ref={radioRef}
      data-module={isConditional ? 'radios' : null}
    >
      {props.items.map((item, index) => {
        const id = item.id ? item.id : `${idPrefix}-${index + 1}`
        const name = item.name ? item.name : props.name
        const key = name + index
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

        if (item.divider) {
          return <div key={key} className="govuk-radios__divider">{item.divider}</div>
        }

        return <React.Fragment key={key}>
          <div className="govuk-radios__item">
            <input
              className="govuk-radios__input"
              id={id}
              name={name}
              type="radio"
              value={item.value}
              defaultChecked={item.checked}
              data-aria-controls={conditionalId}
              aria-describedby={itemDescribedBy ? itemDescribedBy : null}
              disabled={item.disabled}
              {...item.attributes}
            />
            <Label text={item.text || item.html} classes="govuk-radios__label" for={id} />
            {item.hint ? <Hint classes="govuk-radios__hint" {...item.hint} id={itemHintId} /> : ''}
          </div>

          {item.conditional ? <div
            className={`govuk-radios__conditional ${item.checked ? '' : 'govuk-radios__conditional--hidden'}`}
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

export default Radios
