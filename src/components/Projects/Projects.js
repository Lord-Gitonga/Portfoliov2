import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="EAC-PPM"
              description="EAC PPM is an innovative system designed to streamline and unify pharmaceutical transactions across the East African Community (EAC) member states. It serves as a centralized platform for managing the pooled procurement of essential medicines and health commodities, promoting efficiency, transparency, and cost-effectiveness.

The system enables:

Collaborative Procurement: Aggregates orders from EAC countries to negotiate better pricing and ensure consistent supply.
Inventory Management: Tracks stock levels and ensures timely replenishment across member states.
Transaction Unification: Standardizes procurement processes, reducing redundancies and improving accountability.
Data-Driven Insights: Provides analytics and reporting tools for informed decision-making on pharmaceutical needs and expenditures.
Compliance and Quality Assurance: Ensures that procured items meet international standards and regulations.

EAC PPM is a transformative solution aimed at strengthening regional cooperation in health systems, reducing costs, and enhancing access to essential medicines for millions across the EAC."

              demoLink="https://ppm.eac.int"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ecres Solution"
              description="Ecres Solution is a dynamic platform tailored for experts in the pharmaceutical and healthcare fields to register and contribute to critical assignments, particularly during health emergencies and outbreaks. This innovative system connects specialized professionals with tasks that require immediate expertise, ensuring a swift and coordinated response to public health challenges.

The solution enables:

Expert Registration: Allows pharmaceutical and healthcare professionals to create profiles, detailing their areas of expertise and availability for assignments.
Targeted Task Allocation: Matches experts with assignments based on their qualifications and the specific requirements of ongoing health outbreaks.
Real-Time Notifications: Provides timely alerts about emerging outbreaks and related assignments, enabling experts to respond proactively.
Centralized Database: Maintains a repository of registered experts, assignments, and outbreak data to facilitate efficient task management.
Collaborative Engagement: Promotes teamwork by enabling multiple experts to work together on complex assignments.
Ecres Solution empowers the pharmaceutical and healthcare communities to combat outbreaks effectively, leveraging expertise and technology to protect public health and save lives."

              demoLink="https://ecres.nsl-consultancy.africa:150"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/morris"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/morris"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
