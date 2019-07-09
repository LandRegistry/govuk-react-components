import React, {useEffect} from 'react'
import Breadcrumbs from '../components/govukComponents/Breadcrumbs'

function BreadcrumbsDemo() {
  useEffect(() => {
    document.title = 'Breadcrumbs demo'
  }, [])

  const items = [
    {
      text: 'Home',
      href: '#',
    },
    {
      text: 'Passports, travel and living abroad',
      href: '#',
    },
    {
      text: 'Travel abroad',
    },
  ]

  return (
    <main id="main-content">
      <Breadcrumbs attributes={{title: 'breadcrumb'}} items={items} />
    </main>
  )
}

export default BreadcrumbsDemo
