import React, { Component } from 'react';
import Input from '../components/govukComponents/Input'

class InputDemo extends Component {
  render() {
    return (
      <main>
        <Input classes="classes" label={{ text: "This label" }} hint={{ text: "This hint" }} formGroup={{ classes: "custom-class" }} />
      </main>
    )
  }
}

export default InputDemo