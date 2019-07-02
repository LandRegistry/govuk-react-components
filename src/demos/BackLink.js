import React, {useEffect} from 'react'
import BackLink from '../components/govukComponents/BackLink'

function BackLinkDemo() {
  useEffect(() => {
    document.title = 'Back link demo'
  }, [])

  return (
    <main id="main-content">
      <h1 className="govuk-heading-l">Back link</h1>
      <BackLink classes="custom-class new-class" href="/" />
    </main>
  )
}

export default BackLinkDemo
