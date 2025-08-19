import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";
import Particle from "../Particle";

// Import certificate images
import aws from "../../Assets/Certifications/aws.png";
import oracle from "../../Assets/Certifications/oracle.png";
import lingua from "../../Assets/Certifications/lingua.png";
import nptelDS from "../../Assets/Certifications/nptel_ds.png";
import nptelAI from "../../Assets/Certifications/nptel_ai.png";
import hackathon from "../../Assets/Certifications/hackathon.png";
import ecell from "../../Assets/Certifications/ecell.png";
import swecha from "../../Assets/Certifications/swecha.png";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Global Certifications */}
        <h1 className="project-heading">
          Global <strong className="purple">Certifications</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={aws}
              title="AWS Certified Cloud Practitioner"
              description="AWS | Cloud | Services | Security | Pricing | Fundamentals"
              verifyLink="https://aws.amazon.com/verification-link"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={oracle}
              title="Oracle Certified Professional"
              description="Java | OOP | Collections | JDBC | Multithreading | Exception Handling"
              verifyLink="https://oracle.com/verification-link"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={oracle}
              title="Red Hat Certified "
              description="Linux | System Admin | Shell Scripting | Networking | Security"
              verifyLink="https://oracle.com/verification-link"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={lingua}
              title="Lingua Skills Certificate"
              description="English | Communication | Reading | Writing | Listening | Speaking"
              verifyLink="https://cambridgeenglish.org/verification-link"
            />
          </Col>
        </Row>

        {/* NPTEL Certifications */}
        <h1 className="project-heading">
          <strong className="purple">NPTEL</strong> Certifications
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={nptelDS}
              title="Automata, Languages and Computation"
              description="NPTEL-certified course on data science concepts, statistical methods, and data handling."
              verifyLink="https://nptel.ac.in/verify-ds"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={nptelAI}
              title="Problem Solving through Programming in C"
              description="NPTEL-certified course covering AI foundations, problem-solving, and machine learning basics."
              verifyLink="https://nptel.ac.in/verify-ai"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={nptelAI}
              title="Programming in Java"
              description="NPTEL-certified course covering AI foundations, problem-solving, and machine learning basics."
              verifyLink="https://nptel.ac.in/verify-ai"
            />
          </Col>

        </Row>


        {/* Internship Certifications */}
        <h1 className="project-heading">
          <strong className="purple">Internship</strong> Certifications
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={swecha}
              title="Social Internship"
              description="Social Internship | Swecha | Bridge the digital divide | Interactive Web Applications"
              verifyLink="https://nptel.ac.in/verify-ds"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={nptelAI}
              title="Cloud Virtual Internhsip "
              description="NPTEL-certified course covering AI foundations, problem-solving, and machine learning basics."
              verifyLink="https://nptel.ac.in/verify-ai"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={nptelAI}
              title="Data Engineering Virtual Internhsip "
              description="NPTEL-certified course covering AI foundations, problem-solving, and machine learning basics."
              verifyLink="https://nptel.ac.in/verify-ai"
            />
          </Col>

        </Row>
        {/* Participation Certifications */}
        <h1 className="project-heading">
          <strong className="purple">Participation</strong> Certifications
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={hackathon}
              title="PSG iTech Hackfest 2023"
              description="Participated in national-level hackathon focusing on healthcare innovation and solutions."
              verifyLink="https://hackathon.com/verify"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={hackathon}
              title="Smart India Hackathon 2023"
              description="Participated in national-level hackathon focusing on healthcare innovation and solutions."
              verifyLink="https://hackathon.com/verify"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={hackathon}
              title="Smart India Hackathon 2024"
              description="Participated in national-level hackathon focusing on healthcare innovation and solutions."
              verifyLink="https://hackathon.com/verify"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={hackathon}
              title="Freedom Fest 2024"
              description="Participated in national-level hackathon focusing on healthcare innovation and solutions."
              verifyLink="https://hackathon.com/verify"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={ecell}
              title="E-Cell National Entrepreneurship Challenge"
              description="Finalist among top 50 teams in NEC by IIT Bombay E-Cell."
              verifyLink="https://ecell.in/verify"
            />
          </Col>
        </Row>

        {/* Other Certifications */}
        <h1 className="project-heading">
          Other <strong className="purple">Certifications</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={swecha}
              title="Snowflake Data Warehouse"
              // description="Actively contributed to SwechaAP, promoting open-source software development."
              verifyLink="https://ecell.in/verify"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={swecha}
              title="Snowflake collaboration and Marketplace"
              // description="Actively contributed to SwechaAP, promoting open-source software development."
              verifyLink="https://ecell.in/verify"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={swecha}
              title="Snowflake  DataLake"
              // description="Actively contributed to SwechaAP, promoting open-source software development."
              verifyLink="https://ecell.in/verify"
            />
          </Col>

        <Col md={4} className="project-card">
            <CertificationCard
              imgPath={swecha}
              title="Infosys Springboard - Basics of Python"
              // description="Actively contributed to SwechaAP, promoting open-source software development."
              verifyLink="https://ecell.in/verify"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={swecha}
              title="Infosys Springboard - Python Foundation Certificate"
              // description="Actively contributed to SwechaAP, promoting open-source software development."
              verifyLink="https://ecell.in/verify"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
