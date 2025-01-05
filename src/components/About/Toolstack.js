import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
} from "react-icons/si";
import { FaWallet } from "react-icons/fa"; // Phantom Wallet Icon

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{ color: "#0078d7" }} /> {/* VS Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman style={{ color: "#FF6C37" }} /> {/* Postman */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel style={{ color: "black" }} /> {/* Vercel */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub style={{ color: "#181717" }} /> {/* GitHub */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaWallet style={{ color: "#551A8B" }} /> {/* Phantom Wallet */}
      </Col>
    </Row>
  );
}

export default Toolstack;
