import React, {useEffect} from 'react'
import PhaseBanner from '../components/govukComponents/PhaseBanner'

function PhaseBannerDemo() {
  useEffect(() => {
    document.title = 'Phase banner demo'
  }, [])

  return (
    <main id="#content">
      <h1 className="govuk-heading-l">Phase banner</h1>
      <PhaseBanner tag={{text: 'Beta'}} />
    </main>
  )
}

export default PhaseBannerDemo
