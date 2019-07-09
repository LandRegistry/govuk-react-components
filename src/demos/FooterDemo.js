import React, {useEffect} from 'react'

function FooterDemo() {
  useEffect(() => {
    document.title = 'Footer demo'
  }, [])

  return (
    <main id="#content">
      <h1 className="govuk-heading-l">Footer</h1>
      <p className="govuk-body">See Footer&hellip;</p>
    </main>
  )
}

export default FooterDemo
