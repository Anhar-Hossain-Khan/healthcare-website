import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const {img, name, description} = props.service
    return (
        <div className="mt-5">
        <Col>
        <Card>
          <Card.Img variant="top" className="card-img border border-primary rounded-3" src={img} />
          <Card.Body>
             <h3>{name}</h3>
             <p>{description}</p>
             <Button variant="primary">Click For Details</Button>
          </Card.Body>
        </Card>
      </Col>
        </div>
    );
};

export default Service;