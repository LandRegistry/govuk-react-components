import React, {useEffect} from 'react'
import Input from '../components/govukComponents/Input'

function InputDemo() {
  useEffect(() => {
    document.title = 'Input demo'
  }, [])

  return (
    <main id="main-content">
      <h1 className="govuk-heading-l">Input</h1>
      <Input id="plainInput" classes="classes" label={{text: 'Input with label', attributes: {id: 'LabelCheck', title: 'Label Check'}}} formGroup={{classes: 'custom-class'}} />
      <Input id="inputWithHint" classes="classes" label={{text: 'Input with hint'}} hint={{text: 'This hint'}} formGroup={{classes: 'custom-class'}} />
      <Input id="inputWithError" classes="classes" label={{text: 'Input with error message'}} hint={{text: 'This hint'}} formGroup={{classes: 'custom-class'}} errorMessage={{text: 'Error message'}} />
    </main>
  )
}

export default InputDemo
