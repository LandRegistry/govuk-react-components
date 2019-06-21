import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

function Link(props) {
  const { children, classes, attributes, to, href } = props

  if (to) {
    return <ReactRouterLink to={to} className={classes} {...attributes}>{props.children}</ReactRouterLink>
  } else {
    return <a href={href} className={classes} {...attributes}>{children}</a>
  }
}

Link.defaultProps = {
  classes: '',
  className: ''
}

export default Link;
