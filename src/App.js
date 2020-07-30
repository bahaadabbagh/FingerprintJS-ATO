import React from "react";
import "./App.css";
// import { Container } from "react-bootstrap";
import HeroPart from "./components/HeroPart";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import Companies from "./components/Companies";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Container className="App"> */}
        <HeroPart />
        <Highlights/>
        <CallToAction/>
      {/* </Container> */}
      <Companies/>
    </div>
  );
}

export default App;
