import React from "react";
import { Badge, Col, Row, Button } from "react-bootstrap";
import heroImage from "../images/heroImage.jpeg";

export default function HeroPart() {
  return (
    <div>
      <Row>
        <Col md="5" className="heroText">
          {" "}
          <h1>
            Stop Account Takeovers <br />
            Check Their 

            {" "} 
             <Badge variant="primary">
            FirngprintJS
             </Badge>
          </h1>
          <h3>Today, Account Takeover Attacks Can Affect Any Organization With a Login Proces</h3>
          {/* <h2>Apply the industries leading fingerprint technology against account takeover</h2> */}
          {/* <h2>99.5 accuracy and the most comprehensive fingerprint security</h2> */}
          <div className="CTA">
            <Button variant="danger">10 day free trial</Button>
            {/* <h3 className="betweenCTA">Or</h3> */}
            {/* <Button variant="primary">Try Demo {" "}</Button> */}
          </div>
        </Col>
        <Col md="6">
          <img src={heroImage} width="100%" alt=""></img>
        </Col>
      </Row>
    </div>
  );
}
