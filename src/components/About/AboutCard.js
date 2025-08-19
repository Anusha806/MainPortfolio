import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anusha Majji </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />
            I am currently working as an intern at NOKIA.
            <br />
            I have completed BTech in Computer Science Engineering at KLEF 
            Vijayawada, Andhra Pradesh.
            <br />
            <br />
            Apart from coding and competitions, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Give vission a Heartbeat!"{" "}
          </p>
          <footer className="blockquote-footer">Anusha Majji</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
