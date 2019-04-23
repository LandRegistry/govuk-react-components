import React from 'react'
import { Link } from 'react-router-dom'

function BackLink(props) {

  return (
    <Link to={props.href} className={`govuk-back-link${props.classes ? ' ' + props.classes : ''}`} {...props.attributes}>Back</Link>
  )
}

BackLink.defaultProps = {
  to: "/"
}

export default BackLink