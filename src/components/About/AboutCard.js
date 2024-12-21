import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">MORRIS GITONGA </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            I am currently employed as a software developer at Nextrans Solutions LTD.
            <br />
            I have completed my Bachelor's degree in Applied Computing from KCA University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Craft innovation, create impact builds to make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Gitonga</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
