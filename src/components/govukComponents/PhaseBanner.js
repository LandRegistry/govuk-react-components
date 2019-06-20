import React from 'react'
import Tag from './Tag'

function PhaseBanner(props) {
  return <div className={`govuk-phase-banner ${props.classes}`} {...props.attributes}>
    <p className="govuk-phase-banner__content">
      <Tag {...props.tag} classes={`govuk-phase-banner__content__tag${(props.tag && props.tag.classes) || ''}`} />

      <span className="govuk-phase-banner__text">
        { props.html ? props.html : props.text }
      </span>
    </p>
  </div>
}

PhaseBanner.defaultProps = {
  classes: ''
}

export default PhaseBanner;
