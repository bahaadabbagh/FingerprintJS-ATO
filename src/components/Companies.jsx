import React from 'react';
import {Row} from 'react-bootstrap';
import logos from "../images/companies.jpg";

export default function Companies() {
    return (
        <div>
            <div className="companiesText">
        <h1>Work Safer With FingerprintJS</h1>
        <h6>Companies Leveraging Our Security</h6>
      </div>
      <Row>
        <img src={logos} width="100%" alt="logos"></img>
      </Row>
        </div>
    )
}
