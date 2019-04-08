import React, { Component } from 'react';
import BackLink from '../components/govukComponents/BackLink'

class BackLinkDemo extends Component {
  render() {
    return (
      <main>
        <BackLink classes="custom-class new-class" />
      </main>
    )
  }
}

export default BackLinkDemo