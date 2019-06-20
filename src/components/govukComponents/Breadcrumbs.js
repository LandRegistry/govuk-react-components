import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumbs(props) {

  const breadcrumbs = props.items.map((item, index) =>
    item.href ?
      <li key={'breadcrumb' + index} className="govuk-breadcrumbs__list-item">
        <Link className="govuk-breadcrumbs__link" to={item.href} {...item.attributes}>{item.html ? item.html : item.text}</Link>
      </li >
      :
      <li key={'breadcrumb' + index} className="govuk-breadcrumbs__list-item" aria-current="page">{item.html ? item.html : item.text}</li>
  )

  return (
    <div className={`govuk-breadcrumbs ${props.classes}`} {...props.attributes}>
      <ol className="govuk-breadcrumbs__list">
        {breadcrumbs}
      </ol>
    </div>
  )
}

Breadcrumbs.defaultProps = {
  classes: ''
}

export default Breadcrumbs
