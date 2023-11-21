import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import meet from "../../Assets/Projects/meet-time.png";
import ustawi from "../../Assets/Projects/ustawi.jpg";
import ecommerce from "../../Assets/Projects/e-commerce.png";
import procam from "../../Assets/Projects/procam.png";
import simployee from "../../Assets/Projects/simployee.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={procam}
              isBlog={false}
              title="Procam"
              description="Procam streamlines property inspections and work order creation for community association managers
               using personal devices. Homeowner associations act as clients, and a network of maintenance companies receives and
                fulfills project assignments within the communities.It serves as a centralized platform for efficient communication 
                and coordination among these key stakeholders in property management."
              ghLink="https://github.com/kineticcodes/procam-tasks-FE"
              demoLink="https://www.procamtasks.com/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meet}
              isBlog={false}
              title="Meet-Time"
              description="Meet-Time provides a platform to create video-conferencing meetings, audio conferencing meetings and chat rooms.
              It uses WebRTC for video and audio streaming and Socket.io for real-time communication. Currently it supports upto 4 
              participants in a video-conferencing meeting."
              ghLink="https://github.com/Rohit-Sharma305541/meet-time"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ustawi}
              isBlog={false}
              title="Ustawi"
              description="Ustawi is a react native mobile application which helps in managing financial goals by creating, updating and deleting 
              financial goals based on user preferences. It also provides a platform to track the progress of the financial goals by providing graphs 
              and charts."
              ghLink="https://github.com/kineticcodes/UstawiFE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="R the store"
              description="R the store is an e-commerce website which provides a platform to buy apparels. 
              It provides a platform to add products to cart, and payment using Stripe."
              ghLink="https://github.com/Rohit-Sharma305541/ecommerce-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simployee}
              isBlog={false}
              title="Simployee"
              description="Simployee is a web application which provides a platform to manage employees. It helps in the 
              smooth onboarding of the employees"
              ghLink="https://github.com/Rohit-Sharma305541/simployee-frontend"
              demoLink="https://simployee.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
