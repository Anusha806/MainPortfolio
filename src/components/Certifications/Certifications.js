import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";
import Particle from "../Particle";
//import all
// Import certificate images
import aws from "../../Assets/Certifications/aws.png";
import oracle from "../../Assets/Certifications/oracle.png";
import redhat from "../../Assets/Certifications/redhat.png";
import lingua from "../../Assets/Certifications/lingua.png";
import nptelDS from "../../Assets/Certifications/nptel_ds.png";
import nptelAI from "../../Assets/Certifications/nptel_ai.png";
import hackathon from "../../Assets/Certifications/hackathon.png";
import psgithackfest from "../../Assets/Certifications/psgithackfest.png";
import ecell from "../../Assets/Certifications/ecell.png";
import swecha from "../../Assets/Certifications/swecha.png";
import eduskills from "../../Assets/Certifications/eduskills1.png";
import freedomfest from "../../Assets/Certifications/freedomfest.png";
import datawarehouse from "../../Assets/Certifications/datawarehouse.png";
import collabAndMarketplace from "../../Assets/Certifications/CollabAndMarketplace.png";
import datalake from "../../Assets/Certifications/datalake.png";
import aviatrix from "../../Assets/Certifications/aviatrix.png";
import RPA from "../../Assets/Certifications/RPA.png";
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
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_aws-cloud-practitioner-activity-7207703032216653824-OuGU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={oracle}
              title="Oracle Certified Professional"
              description="Java | OOP | Collections | JDBC | Multithreading | Exception Handling"
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_java-javase11-developercertification-activity-7218145011459063808-gBn2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={redhat}
              title="Red Hat Certified "
              description="Linux | System Admin | Shell Scripting | Networking | Security"
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_redhat-certification-linux-activity-7280842063129059330-Wi_5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={lingua}
              title="Lingua Skills Certificate"
              description="English | Communication | Reading | Writing | Listening | Speaking"
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_linguaskill-english-proficiency-certification-activity-7337705677097680897-uXbM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
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
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_nptel-automata-atfl-activity-7194703295322468353-aKxw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={nptelAI}
              title="Problem Solving through Programming in C"
              description="NPTEL-certified course covering AI foundations, problem-solving, and machine learning basics."
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_nptelcertification-cprogrammingpro-codecraftsman-activity-7155003282166358016-Kd5B?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={nptelAI}
              title="Programming in Java"
              description="NPTEL-certified course covering AI foundations, problem-solving, and machine learning basics."
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_nptelcertification-javaprogrammingpro-codecraftsman-activity-7155004490910208001-7WG_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
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
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_social-internship-2023-activity-7190701675496591360-0TcS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={eduskills}
              title="Cloud Virtual Internhsip "
              description="NPTEL-certified course covering AI foundations, problem-solving, and machine learning basics."
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_eduskills-virtual-internship-activity-7204884022630522881-OGvX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={eduskills}
              title="Data Engineering Virtual Internhsip "
              description="NPTEL-certified course covering AI foundations, problem-solving, and machine learning basics."
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_aws-dataengineering-virtualinternship-activity-7171886769095798786-JYfT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
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
              imgPath={psgithackfest}
              title="PSG iTech Hackfest 2023"
              description="Participated in national-level hackathon focusing on healthcare innovation and solutions."
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_itechhackfest2023-techinnovation-codingjourney-activity-7089997285941469184-bEHm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={hackathon}
              title="Smart India Hackathon 2023"
              description="Participated in national-level hackathon focusing on healthcare innovation and solutions."
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_smart-india-hackathon-2023-activity-7190703269206228992-HFca?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={hackathon}
              title="Smart India Hackathon 2024"
              description="Participated in national-level hackathon focusing on healthcare innovation and solutions."
              verifyLink="https://drive.google.com/file/d/1Ahf9hgkjmP7Z91w_qLd9-YzowRWCnWbl/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={freedomfest}
              title="Freedom Fest 2024"
              description="Participated in national-level hackathon focusing on healthcare innovation and solutions."
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_swechafreedomfest2024-activity-7190706653439102976-msWk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={ecell}
              title="E-Cell National Entrepreneurship Challenge"
              description="Finalist among top 50 teams in NEC by IIT Bombay E-Cell."
              verifyLink="https://drive.google.com/file/d/1uC0hha9LxSYoPFoWNT4z7dvetbx-NUg2/view?usp=sharing"
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
              imgPath={datawarehouse}
              title="Snowflake Data Warehouse"
              // description="Actively contributed to SwechaAP, promoting open-source software development."
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_snowflake-datawarehouse-datamanagement-activity-7234527483625095169-SfZW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={collabAndMarketplace}
              title="Snowflake collaboration and Marketplace"
              // description="Actively contributed to SwechaAP, promoting open-source software development."
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_snowflake-datacloud-certification-activity-7241488653124825088-tGS9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={datalake}
              title="Snowflake  DataLake"
              // description="Actively contributed to SwechaAP, promoting open-source software development."
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_snowflakes-queryingstructureddata-fileformats-activity-7253098352660135939-X9ce?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
            />
          </Col>

        <Col md={4} className="project-card">
            <CertificationCard
              imgPath={aviatrix}
              title="Aviatrix - Multicloud Network Associate"
              // description="Actively contributed to SwechaAP, promoting open-source software development."
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_aviatrix-certified-engineer-multicloud-network-activity-7219555773436108801-gozB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={RPA}
              title="Automation Anywhere - RPA Professional"
              // description="Actively contributed to SwechaAP, promoting open-source software development."
              verifyLink="https://www.linkedin.com/posts/anusha-majji-432542282_essentials-rpa-professional-certification-activity-7215976418524946432-ku49?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETHb-YB600i6iOVVkoYM_I5yLCKEd0cdf4"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
