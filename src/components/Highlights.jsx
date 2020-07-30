import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import frequency from "../images/frequency.svg";
import bot from "../images/bot.png";
import browser from "../images/browser.svg";
import incognito from "../images/incognito.svg";
import map from "../images/Map.svg";

export default function Highlights() {
  return (
    <div className="containera">
      <Row>
        {" "}
        <h2 className="highlightsHero">
          <strong>
            {" "}
            5 Ways FingerprintJs Will Defend You Against Account Takeover
          </strong>
        </h2>
      </Row>
      <Row>
        <Col md="3" width="10rem">
          <Card.Img variant="top" src={bot} width="18rem" />
          <Card.Title> BOT DETECTION</Card.Title>
          <Card.Text width="100%">
            Detection of the most sophisticated bots to prevent credential stuffing
            with a bot probablity factor for each user
            {/* We Protect your site from bots trying to breach your data */}
          </Card.Text>
        </Col>
        <Col md="1"></Col>
        <Col md="3" width="10rem">
        <Card.Img variant="top" src={map} />
          <Card.Title> GEOLOCATION</Card.Title>
          <Card.Text>
            Don't allow attackers to hide under fake IPs.
            {/* Attackers Try to Use Kocal And Trusted IPs. */}Determine where your
            users are located by checking their FingerprintJs!
          </Card.Text>
        </Col>
        <Col md="1"></Col>
        <Col md="3" width="100%">
          <Card.Img variant="top" src={browser} />
          <Card.Title> BROWSER FINGERPRINTING</Card.Title>
          <Card.Text>
            Leverage of the most advanced browser Fingerprinting in the market by undoubtedly identifying your users everytime
          </Card.Text>
        </Col>
        </Row>
            <Row>
        <Col md="2"></Col>
        <Col md="3" width="100%">
          <Card.Img variant="top" src={incognito} />
          <Card.Title> INCOGNITO MODE DETECTION</Card.Title>
          <Card.Text>
          Incognito mode browsing cannot hide their identity with our advanced browser fingerprinting. 
          </Card.Text>
          </Col>
          <Col md="1"></Col>
        <Col md="3" width="100%">
        <Card.Img variant="top" src={frequency} />
          <Card.Title> FREQUENCY DETECTION</Card.Title>
          <Card.Text>
          Flag irregular frequency of requests from your website that arise during an attack by analysing against time of day,
          location and many other factors
          </Card.Text>
        </Col>
      </Row>
    </div>
  );
}
