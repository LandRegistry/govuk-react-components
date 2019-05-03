import React from 'react'
import { Link } from 'react-router-dom'

function BackLink(props) {
  const classes = `govuk-back-link${props.classes ? ' ' + props.classes : ''}`
  const contents = props.html ? props.html : props.text

  if (props.href === '#') {
    return <a href={props.href} className={classes} {...props.attributes}>{contents}</a>
  } else {
    return <Link to={props.href} className={classes} {...props.attributes}>{contents}</Link>
  }
}

BackLink.defaultProps = {
  to: "/",
  text: 'Back'
}

export default BackLink
