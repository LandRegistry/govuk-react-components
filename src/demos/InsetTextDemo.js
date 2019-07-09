import React, {useEffect} from 'react'
import InsetText from '../components/govukComponents/InsetText'

function InsetTextDemo() {
  useEffect(() => {
    document.title = 'Inset text demo'
  })

  return (
    <main id="main-content">
      <h1 className="govuk-heading-l">Inset text</h1>
      <InsetText text="It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application." />
    </main>
  )
}

export default InsetTextDemo
