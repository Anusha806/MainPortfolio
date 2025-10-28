// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={chatify}
//               isBlog={false}
//               title="Fashion IQ"
//               description="AI-powered fashion recommendation system that uses sentiment analysis and CLIP embeddings to suggest outfits based on natural language queries and image inputs."
//               ghLink="https://github.com/soumyajit4419/Chatify"
//               demoLink="https://chatify-49.web.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title="Book Detection System"
//               description="Standalone application using Tesseract OCR and PyQt5 to detect book covers, extract text in Telugu and English, and fetch detailed metadata with PDF previews."
//               ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
//               demoLink="https://blogs.soumya-jit.tech/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="Inventory Management System"
//               description="Django-based system with PostgreSQL backend to manage club-specific inventories, with admin approval, low-stock alerts, and easy tracking."
//               ghLink="https://github.com/soumyajit4419/Editor.io"
//               demoLink="https://editor.soumya-jit.tech/"              
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={leaf}
//               isBlog={false}
//               title="HackRx"
//               description="PolicyAI allows users to upload a policy document and ask up to 10 queries. The system retrieves relevant text from the document and provides accurate answers to the user’s questions."
//               ghLink="https://github.com/soumyajit4419/Plant_AI"
//               demoLink="https://plant49-ai.herokuapp.com/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={suicide}
//               isBlog={false}
//               title="Meta MCP"
//               description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
//               ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
//               // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={emotion}
//               isBlog={false}
//               title="Flutter Project"
//               description=""
//               ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
//               // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
//             />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;





import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import policyai from "../../Assets/Projects/policyai.png";
import editor from "../../Assets/Projects/codeEditor.png";
import fashiongpt from "../../Assets/Projects/Fashiongpt.png";
import gradingsystem from "../../Assets/Projects/gradingsystem.png";
import bookdetector from "../../Assets/Projects/bookdetector.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "40px" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={fashiongpt}
              isBlog={false}
              title="Fashion GPT"
              description="AI-powered fashion recommendation system that uses sentiment analysis and CLIP embeddings to suggest outfits based on natural language queries and image inputs."
              ghLink="https://github.com/Anusha806/walmart"
              demoLink="https://youtu.be/sZCf7udaE7Y?si=fOKORFmTapykXR9J"
            />
          </Col>

          <Col md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={bookdetector}
              isBlog={false}
              title="Book Detection System"
              description="Standalone application using Tesseract OCR and PyQt5 to detect book covers, extract text in Telugu and English, and fetch detailed metadata with PDF previews."
              ghLink="https://github.com/Anusha806/BookDetectionUsingOCR"
              demoLink="https://youtu.be/E1p3ochSWf4"
            />
          </Col>

          <Col md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Inventory Management System"
              description="Django-based system with PostgreSQL backend to manage club-specific inventories, with admin approval, low-stock alerts, and easy tracking."
              ghLink="https://github.com/Anusha806/Inventory_Management"
              // demoLink="https://github.com/Anusha806/Inventory_Management"              
            />
          </Col>

          <Col md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={policyai}
              isBlog={false}
              title="PolicyAI"
              description="PolicyAI allows users to upload a policy document and ask up to 10 queries. The system retrieves relevant text from the document and provides accurate answers to the user's questions."
              ghLink="https://github.com/Anusha806/PolicyAI"
              // demoLink="https://github.com/Anusha806/PolicyAI"
            />
          </Col>

          <Col md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={gradingsystem}
              isBlog={false}
              title="Grading System"
              description="The Grading System is a Java Full-Stack application where teachers can upload assignments, grade student submissions, and provide feedback. Students can submit their work, view grades and feedback, and track assignment deadlines seamlessly."
              ghLink="https://github.com/swetha2200031729/Grading-System"
              
            />
          </Col>

          <Col md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MetaMCP" 
              description="MetaMCP is an automated, AI-powered system that generates complete, scalable, and reproducible MCP packages from simple high-level inputs "
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://youtu.be/AecSXw9lYik?si=EjgBElFZyB7RiQUF"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;