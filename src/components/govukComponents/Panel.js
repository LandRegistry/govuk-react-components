import React from 'react'
import PropTypes from 'prop-types'

function Panel(props) {
  const HeadingLevel = props.headingLevel ? `h${props.headingLevel}` : 'h1'

  const innerHtml = (
    <div className="govuk-panel__body">
      {props.html || props.text}
    </div>
  )

  return (

    <div className={`govuk-panel govuk-panel--confirmation ${props.classes}`} {...props.attributes}>
      <HeadingLevel className="govuk-panel__title">
        {props.titleHtml || props.titleText}
      </HeadingLevel>
      {innerHtml}
    </div>
  )
}

Panel.defaultProps = {
  classes: '',
}

Panel.propTypes = {
  headingLevel: PropTypes.string,
  html: PropTypes.string,
  text: PropTypes.string,
  classes: PropTypes.string,
  attributes: PropTypes.object,
  titleHtml: PropTypes.string,
  titleText: PropTypes.string,
}

export default Panel;
