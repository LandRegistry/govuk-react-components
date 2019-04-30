import React from 'react';
import Nav from './Nav';
import AccordionDemo from '../demos/AccordionDemo';
import BackLink from '../demos/BackLink';
import ButtonDemo from '../demos/ButtonDemo';
import CheckboxesDemo from '../demos/CheckboxesDemo';
import DetailsDemo from '../demos/DetailsDemo';
import ErrorSummaryDemo from '../demos/ErrorSummaryDemo';
import FileUploadDemo from '../demos/FileUploadDemo';
import HintDemo from '../demos/HintDemo';
import InputDemo from '../demos/InputDemo';
import LabelDemo from '../demos/LabelDemo';
import PanelDemo from '../demos/PanelDemo';
import RadiosDemo from '../demos/RadiosDemo';
import SelectDemo from '../demos/SelectDemo';
import SkipLinkDemo from '../demos/SkipLinkDemo';
import TagDemo from '../demos/TagDemo';
import TextareaDemo from '../demos/TextareaDemo';
import WarningTextDemo from '../demos/WarningTextDemo';

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
      text: "Details",
      href: "/details"
    }, {
      text: "ErrorSummary",
      href: "/error-summary"
    }, {
      text: "FileUpload",
      href: "/file-upload"
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
      text: "Panel",
      href: "/panel"
    }, {
      text: "Radios",
      href: "/radios"
    }, {
      text: "Select",
      href: "/select"
    }, {
      text: "Skip link",
      href: "/skip-link"
    }, {
      text: "Textarea",
      href: "/textarea"
    }, {
      text: "Tag",
      href: "/tag"
    }, {
      text: "Warning text",
      href: "/warning-text"
    }]

  return (
    <div class="govuk-main-wrapper">
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
              <Route exact path="/details" component={DetailsDemo} />
              <Route exact path="/error-summary" component={ErrorSummaryDemo} />
              <Route exact path="/file-upload" component={FileUploadDemo} />
              <Route exact path="/hint" component={HintDemo} />
              <Route exact path="/input" component={InputDemo} />
              <Route exact path="/label" component={LabelDemo} />
              <Route exact path="/panel" component={PanelDemo} />
              <Route exact path="/radios" component={RadiosDemo} />
              <Route exact path="/select" component={SelectDemo} />
              <Route exact path="/skip-link" component={SkipLinkDemo} />
              <Route exact path="/tag" component={TagDemo} />
              <Route exact path="/textarea" component={TextareaDemo} />
              <Route exact path="/warning-text" component={WarningTextDemo} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;