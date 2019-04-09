import React, { Component } from 'react';
import Input from '../components/govukComponents/Input'

class InputDemo extends Component {
  render() {
    return (
      <main>
        <Input classes="classes" label={{ text: "Input with label" }} formGroup={{ classes: "custom-class" }} />
        <Input classes="classes" label={{ text: "Input with hint" }} hint={{ text: "This hint" }} formGroup={{ classes: "custom-class" }} />
        <Input classes="classes" label={{ text: "Input with error message" }} hint={{ text: "This hint" }} formGroup={{ classes: "custom-class" }} errorMessage={{ text: "Error message" }} />
      </main>
    )
  }
}

export default InputDemo