import React, { Component } from 'react';
import Input from '../components/govukComponents/Input'

class InputDemo extends Component {
  render() {
    return (
      <main>
        <Input id="plainInput" classes="classes" label={{ text: "Input with label", attributes: { id: "LabelCheck", title: "Label Check" } }} formGroup={{ classes: "custom-class" }} />
        <Input id="inputWithHint" classes="classes" label={{ text: "Input with hint" }} hint={{ text: "This hint" }} formGroup={{ classes: "custom-class" }} />
        <Input id="inputWithError" classes="classes" label={{ text: "Input with error message" }} hint={{ text: "This hint" }} formGroup={{ classes: "custom-class" }} errorMessage={{ text: "Error message" }} />
      </main>
    )
  }
}

export default InputDemo