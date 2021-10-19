import React from 'react';
import { Card, Col, Container, Row, Button} from 'react-bootstrap';
import './Activities.css'

const Activities = () => {
    return (
        <Container>
         <h2 className=" mt-4 mb-3 text-success">Our Activities</h2>
          <div>
            <Row xs={1} md={2} lg={4} className="g-0 ">
    <Col>
      <Card>
        <Card.Body className="activities">
          <Card.Title className="text-primary">Update News</Card.Title>
          <Card.Text>
          This hospital consists of the following departments Emergency, General Surgery, Laparoscopic Surgery, Gyne & Obs, Ear Nose Throat (ENT), Medicine, Urology.
          </Card.Text>
          <Button >Read More</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Body className="activities">
          <Card.Title className="text-primary">Top Doctors</Card.Title>
          <Card.Text>
         We Provide our services by  Specialist Doctors.Radiology is the medical discipline that uses medical imaging to diagnose and treat diseases within the bodies humans.
          </Card.Text>
          <Button >Read More</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Body className="activities">
          <Card.Title className="text-primary">24 Hours Services</Card.Title>
          <Card.Text>
          This Hospital has 24X7 emergency services with 24 Hour emergency doctors available. Our 24 hour open emergency hospital near you is always ready for any situation.
          </Card.Text>
          <Button >Read More</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Body className="activities">
          <Card.Title className="text-primary">Emergency Services</Card.Title>
          <Card.Text>
          This Hospital has 24X7 emergency services with 24 Hour emergency doctors available. Our 24 hour open emergency hospital near you is always ready for any situation.
          </Card.Text>
          <Button>Read More</Button>
        </Card.Body>
      </Card>
    </Col>
</Row>
        </div>
       </Container>
    );
};
    
export default Activities;