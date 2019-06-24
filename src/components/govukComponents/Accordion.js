import React, { useEffect } from 'react'
import AccordionJS from 'govuk-frontend/components/accordion/accordion'

function Accordion(props) {
  const accordionRef = React.createRef();

  useEffect(() => {
    new AccordionJS(accordionRef.current).init()
  }, [])

  const { id } = props
  const HeadingLevel = props.headingLevel ? `h${props.headingLevel}` : 'h2'

  const innerHtml = props.items.map((item, index) => (
    <div key={(item.heading.html || item.heading.text) + index} className={`govuk-accordion__section ${item.expanded ? 'govuk-accordion__section--expanded' : ''}`}>
      <div className="govuk-accordion__section-header">
        <HeadingLevel className="govuk-accordion__section-heading">
          <span className="govuk-accordion__section-button" id={`${id}-heading-${index + 1}`}>
            {item.heading.html || item.heading.text}
          </span>
        </HeadingLevel>
        {item.summary
          ? (
            <div className="govuk-accordion__section-summary govuk-body" id={`${id}-summary-${index + 1}`}>
              {item.summary.html || item.summary.text}
            </div>
          ) : ''}
      </div>
      <div id={`${id}-content-${index + 1}`} className="govuk-accordion__section-content" aria-labelledby={`${id}-heading-${index + 1}`}>
        {item.content.html || item.content.text}
      </div>
    </div>
  ))
  return (

    <div className={`govuk-accordion ${props.classes}`} data-module="accordion" id={props.id} {...props.attributes} ref={accordionRef}>
      {innerHtml}
    </div>

  )
}

Accordion.defaultProps = {
  classes: '',
}

export default Accordion
