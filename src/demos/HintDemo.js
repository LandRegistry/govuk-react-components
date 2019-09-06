import React, {useEffect} from 'react'
import Hint from '../components/govukComponents/Hint'

function HintDemo() {
  useEffect(() => {
    document.title = 'Hint demo'
  }, [])

  return (
    <main id="main-content">
      <h1 className="govuk-heading-l">Hint</h1>
      <Hint text="this is my hint text" />
      <Hint html={(
        <>
          Hint text
          <strong> with HTML</strong>
        </>
      )}
      />
    </main>
  )
}

export default HintDemo
