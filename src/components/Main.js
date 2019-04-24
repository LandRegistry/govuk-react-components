import React from 'react';
import Nav from './Nav';
import AccordionDemo from '../demos/AccordionDemo';
import BackLink from '../demos/BackLink';
import ButtonDemo from '../demos/ButtonDemo';
import CheckboxesDemo from '../demos/CheckboxesDemo';
import ErrorSummaryDemo from '../demos/ErrorSummaryDemo';
import HintDemo from '../demos/HintDemo';
import InputDemo from '../demos/InputDemo';
import LabelDemo from '../demos/LabelDemo';
import TextareaDemo from '../demos/TextareaDemo';
import SkipLinkDemo from '../demos/SkipLinkDemo';

import { Route, Switch } from "react-router-dom";

function Main() {

  const navigation = [
    {
      text: "Accordion",
      href: "/accordion"
    },
    {
      text: "Back link",
      href: "/back-link"
    }, {
      text: "Button",
      href: "/button"
    }, {
      text: "Checkboxes",
      href: "/checkboxes"
    }, {
      text: "ErrorSummary",
      href: "/error-summary"
    }, {
      text: "Hint",
      href: "/hint"
    }, {
      text: "Input",
      href: "/input"
    }, {
      text: "Label",
      href: "/label"
    }, {
      text: "Textarea",
      href: "/textarea"
    }, {
      text: "Skip link",
      href: "/skip-link"
    }]

  return (
    <div className="govuk-width-container">
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-quarter">
          <Nav navigation={navigation} />
        </div>
        <div className="govuk-grid-column-three-quarters">
          <Switch>
            <Route exact path="/accordion" component={AccordionDemo} />
            <Route exact path="/back-link" component={BackLink} />
            <Route exact path="/button" component={ButtonDemo} />
            <Route exact path="/checkboxes" component={CheckboxesDemo} />
            <Route exact path="/error-summary" component={ErrorSummaryDemo} />
            <Route exact path="/hint" component={HintDemo} />
            <Route exact path="/input" component={InputDemo} />
            <Route exact path="/label" component={LabelDemo} />
            <Route exact path="/textarea" component={TextareaDemo} />
            <Route exact path="/skip-link" component={SkipLinkDemo} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Main;