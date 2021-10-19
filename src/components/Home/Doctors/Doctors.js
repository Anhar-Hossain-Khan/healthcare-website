import React from 'react';
import doctors1 from '../../../images/doctors/doctors1.jpg'
import doctors3 from '../../../images/doctors/doctors3.jpg'
import doctors4 from '../../../images/doctors/doctors4.jpg'
import doctors2 from '../../../images/doctors/doctors2.jpg'
import { Card, Col, Container, Row } from 'react-bootstrap';

const Doctors = () => {
    return (
        <Container>
         <h2 className=" mt-4 mb-3 text-success">Our Specialist</h2>
          <div>
            <Row xs={1} md={2} className="g-4">
    <Col>
      <Card>
        <Card.Img className="border border-primary rounded-3 " variant="top" src={doctors1} />
        <Card.Body>
          <Card.Title className="text-primary">Dr. kevin Bert</Card.Title>
          <h5>Cardiologist, OutPatient Surgery</h5>
          <Card.Text>
          Cardiology is the study and treatment of disorders of the heart and the blood vessels of human body.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Img className="border border-primary rounded-3" variant="top" src={doctors3} />
        <Card.Body>
          <Card.Title className="text-primary">Dr. Orona Smith</Card.Title>
          <h5>Ophthalmology Specialist</h5>
          <Card.Text>
          Ophthalmologists are specialist eye doctors who diagnose, treat and monitor eye conditions with medication and surgery.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Img className="border border-primary rounded-3" variant="top" src={doctors4} />
        <Card.Body>
          <Card.Title className="text-primary">Dr. Jack Bravo</Card.Title>
          <h5>Radiology Specialist</h5>
          <Card.Text>
          Radiology is the medical discipline that uses medical imaging to diagnose and treat diseases within the bodies humans.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Img className="border border-primary rounded-3" variant="top" src={doctors2} />
        <Card.Body>
          <Card.Title className="text-primary">Dr. Serlena Goms</Card.Title>
          <h5>Dental Specialist</h5>
          <Card.Text>
          How to create sites which respond to the needs and capabilities of the device they are viewed on.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
        </div>
       </Container>
    );
};

export default Doctors;