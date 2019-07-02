import React, {useEffect} from 'react'
import CharacterCount from '../components/govukComponents/CharacterCount'

function CharacterCountDemo() {
  useEffect(() => {
    document.title = 'CharacterCount demo'
  })

  return (

    <main id="main-content">
      <h1 className="govuk-heading-l">Character Count</h1>
      <CharacterCount
        name="with-hint"
        id="with-hint"
        maxlength={200}
        label={
          {text: 'Can you provide more detail?'}
        }
        hint={
          {text: 'Do not include personal or financial information like your National Insurance number or credit card details.'}
        }
      />
    </main>
  )
}

export default CharacterCountDemo
