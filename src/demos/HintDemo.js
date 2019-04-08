import React, { Component } from 'react';
import Hint from '../components/govukComponents/Hint'

class HintDemo extends Component {
  render() {
    return (
      <main>
        <Hint text='Hint text' />
      </main>
    )
  }
}

export default HintDemo