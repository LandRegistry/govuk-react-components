import React, { Component } from 'react';
import Button from '../components/govukComponents/Button'

class BackLinkDemo extends Component {
  render() {
    return (
      <main>
        <Button classes="custom-class new-class" type="submit" value="Continue" />
      </main>
    )
  }
}

export default BackLinkDemo