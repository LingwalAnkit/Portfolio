import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Add your project image imports here
import communitySolar from "../../Assets/Projects/blog.png";
import navShiksha from "../../Assets/Projects/blog.png";
import formFiller from "../../Assets/Projects/blog.png";
import communityChat from "../../Assets/Projects/blog.png";
import whiteboard from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={navShiksha}
              isBlog={false}
              title="NavShiksha SIH(2024)"
              description="An educational platform aimed at improving rural education infrastructure. Selected for the grand finale of SIH 2024."
              ghLink="https://github.com/LingwalAnkit/SIH-NavShiksha" // Add your GitHub link
              demoLink="https://sih-nav-shiksha.vercel.app/" // Add your demo link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={communitySolar}
              isBlog={false}
              title="Community Solar Sharing Platform"
              description="Enables users to invest in shared solar projects and track energy savings. Developed with React and Node.js, with a focus on secure access and Tailwind CSS styling. Utilized locally created tokens for trading solar stocks and included a token launchpad."
              ghLink="https://github.com/LingwalAnkit/Sun-Vest" // Add your GitHub link
              demoLink="#" // Add your demo link
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={formFiller}
              isBlog={false}
              title="PolicyBot"
              description="A Web2 and Web3 integrated platform for automating insurance workflows. Created a frontend using Next.js with Aceternity UI and integrated AI-powered PDF-to-text functionality to fill forms automatically."
              ghLink="https://github.com/LingwalAnkit/Policy_Bots" // Add your GitHub link
              demoLink="#" // Add your demo link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={communityChat}
              isBlog={false}
              title="Community Chat App"
              description="A real-time community chat application designed for seamless interaction. Built with React and Firebase, offering features like message reactions, image sharing, and notifications."
              ghLink="https://github.com/LingwalAnkit/NavShiksha-Chat" // Add your GitHub link
              demoLink="https://nav-shiksha-chat-isox.vercel.app/" // Add your demo link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whiteboard}
              isBlog={false}
              title="Interactive Whiteboard"
              description="A one-sided interactive whiteboard that minimizes bandwidth usage by sending JSON data. Ideal for educational and collaborative purposes."
              ghLink="https://github.com/Sanyam1207/SIH_whiteboardFrontend" // Add your GitHub link
              demoLink="https://sih-whiteboard-frontend.vercel.app/" // Add your demo link
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
