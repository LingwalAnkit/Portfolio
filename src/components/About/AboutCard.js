import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ankit Singh Lingwal </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I am currently in my second year of B.Tech, pursuing Industrial Internet 
            of Things at Guru Gobind Singh Indraprastha University.
            <br />
            <br />
            I have participated in several hackathons, including <b>SIH 2024</b>, 
            where my team’s project, <b>NavShiksha</b>, was selected for the grand finale. 
            I also enjoy creating renewable energy platforms, decentralized community spaces, 
            and automated insurance solutions by blending Web2 and Web3 technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton (I play for 2 hours daily!)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Blockchain and Decentralized Technologies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}


export default AboutCard;
