import React, {useEffect} from 'react'
import Textarea from '../components/govukComponents/Textarea'

function TextareaDemo() {
  useEffect(() => {
    document.title = 'Teaxtarea demo'
  }, [])

  return (
    <main>
      <h1 className="govuk-heading-l">Textarea</h1>
      <Textarea
        id="plaintextarea"
        classes="classes"
        label={{
          text: 'Textarea with label',
          attributes: {
            id: 'LabelCheck',
            title: 'Label Check',
          },
        }}
        formGroup={{
          classes: 'custom-class',
        }}
      />
      <Textarea
        id="textareaWithHint"
        classes="classes"
        label={{
          text: 'Textarea with hint',
        }}
        hint={{
          text: 'This hint',
        }}
        formGroup={{
          classes: 'custom-class',
        }}
      />
      <Textarea
        id="textareaWithError"
        classes="classes"
        label={{
          text: 'Textarea with error message',
        }}
        hint={{
          text: 'This hint',
        }}
        formGroup={{
          classes: 'custom-class',
        }}
        errorMessage={{
          text: 'Error message',
        }}
      />
    </main>
  )
}

export default TextareaDemo
