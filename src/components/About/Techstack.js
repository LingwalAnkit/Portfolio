import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMongodb, SiRust, SiExpress, SiSolidity, SiWeb3Dotjs } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 style={{ color: "#E34F26" }} /> {/* HTML5 */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt style={{ color: "#1572B6" }} /> {/* CSS3 */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJsSquare style={{ color: "#F7DF1E" }} /> {/* JavaScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript style={{ color: "#3178C6" }} /> {/* TypeScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact style={{ color: "#61DAFB" }} /> {/* React */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs style={{ color: "black" }} /> {/* Next.js */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb style={{ color: "#47A248" }} /> {/* MongoDB */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRust style={{ color: "#DEA584" }} /> {/* Rust */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNodeJs style={{ color: "#339933" }} /> {/* Node.js */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress style={{ color: "gray" }} /> {/* Express */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGit style={{ color: "#F05032" }} /> {/* Git */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity style={{ color: "#363636" }} /> {/* Solidity */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWeb3Dotjs style={{ color: "#F16822" }} /> {/* Web3 */}
      </Col>
    </Row>
  );
}

export default Techstack;
