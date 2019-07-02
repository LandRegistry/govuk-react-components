import React, {useEffect} from 'react'
import SkipLink from '../components/govukComponents/SkipLink'

function SkipLinkDemo() {
  useEffect(() => {
    document.title = 'Skip link demo'
  }, [])

  return (
    <main id="main-content">
      <p className="govuk-body">Click here and press Tab for the the demo</p>
      <SkipLink text="Skip to main content" />
    </main>
  )
}

export default SkipLinkDemo
