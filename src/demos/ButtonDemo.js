import React, {useEffect} from 'react'
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
        text="Continue"
      />
      <br />
      <br />
      <Button
        classes="custom-class new-class"
        type="submit"
        text="Disabled"
        disabled
      />
      <br />
      <br />
      <Button
        element="a"
        classes="custom-class new-class"
        type="submit"
        html={<span>link as Button with HTML</span>}
        href="/foo"
      />
      <br />
      <br />
      <Button
        element="a"
        classes="custom-class new-class"
        type="submit"
        text="React Router <Link> button (Goes to accordion page)"
        to="/accordion"
      />
    </main>
  )
}

export default BackLinkDemo
