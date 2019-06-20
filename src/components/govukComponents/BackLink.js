import React from 'react'
import { Link } from 'react-router-dom'

function BackLink(props) {
  const classes = `govuk-back-link${props.classes ? ' ' + props.classes : ''}`
  const contents = props.html ? props.html : props.text

  if (props.to) {
    return <Link to={props.to} className={classes} {...props.attributes}>{contents}</Link>
  } else {
    return <a href={props.href} className={classes} {...props.attributes}>{contents}</a>
  }
}

BackLink.defaultProps = {
  href: "/",
  text: 'Back'
}

export default BackLink
