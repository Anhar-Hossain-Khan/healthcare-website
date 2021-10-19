import React from 'react';
import health from '../../../images/banner/health1.jpg'
import { Card, Col, Container, Row } from 'react-bootstrap';

const Doctors = () => {
    return (
        <Container>
         <h2 className=" mt-4 text-success">Our Specialist</h2>
          <div>
            <Row xs={1} md={2} className="g-4">
    <Col>
      <Card>
        <Card.Img className="border border-primary rounded-3 " variant="top" src={health} />
        <Card.Body>
          <Card.Title className="text-primary">Dr. Maria Bert</Card.Title>
          <h5>Cardiologist, OutPatient Surgery</h5>
          <Card.Text>
          Not everyone can become a senior developer. If you have the “hammer and nail” mentality, then you may not get there.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Img className="border border-primary rounded-3" variant="top" src={health} />
        <Card.Body>
          <Card.Title className="text-primary">Dr. Orona Smith</Card.Title>
          <Card.Text>
          Learn how to use CSS module scripts to import CSS stylesheets using the same syntax as JavaScript modules.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Img className="border border-primary rounded-3" variant="top" src={health} />
        <Card.Body>
          <Card.Title className="text-primary">Dr. Jack Bravo</Card.Title>
          <Card.Text>
          How to select files, read file metadata and content, and monitor read progress.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Img className="border border-primary rounded-3" variant="top" src={health} />
        <Card.Body>
          <Card.Title className="text-primary">Responsive web design basics</Card.Title>
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