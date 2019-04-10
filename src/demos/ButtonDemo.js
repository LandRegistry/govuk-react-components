import React, { Component } from 'react';
import Button from '../components/govukComponents/Button'

class BackLinkDemo extends Component {
  render() {
    return (
      <main>
        <Button classes="custom-class new-class" type="submit" value="Continue" />
        <Button classes="custom-class new-class" type="submit" value="Disabled" disabled="disabled" />
        <Button element="a" classes="custom-class new-class" type="submit" html={<span>link as Button with HTML</span>} />
      </main>
    )
  }
}

export default BackLinkDemo