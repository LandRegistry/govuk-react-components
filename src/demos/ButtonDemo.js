import React, { useEffect } from 'react';
import Button from '../components/govukComponents/Button'

function BackLinkDemo() {

  useEffect(() => {
    document.title = 'Button link demo'
  }, [])

  return (
    <main>
      <h1 className="govuk-heading-l">Button</h1>
      <Button
        classes="custom-class new-class"
        type="submit"
        value="Continue"
      />
      <Button
        classes="custom-class new-class"
        type="submit"
        value="Disabled"
        disabled="disabled"
      />
      <Button
        element="a"
        classes="custom-class new-class"
        type="submit"
        html={<span>link as Button with HTML</span>}
      />
    </main>
  )
}

export default BackLinkDemo