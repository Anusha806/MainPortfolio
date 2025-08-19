import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CertificationCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="certification-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Show button only if verifyLink exists */}
        {props.verifyLink && (
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <Button
              variant="success"
              href={props.verifyLink}
              target="_blank"
              rel="noreferrer"
            >
              ✅ Verify
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default CertificationCard;
