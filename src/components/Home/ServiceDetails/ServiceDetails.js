import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [details, setDetails] = useState([])
    console.log(details);
    useEffect(()=>{
        fetch('/services.json')
        .then(response => response.json())
        .then(data => setDetails(data))
    }, []);
 
    const foundDetails =  details.find(detail => detail.id===serviceId);
    console.log(foundDetails);
   
    return (
       <div>
       <div className="top mb-4">
            <h2>Service <span>Details</span></h2>
            </div>
      <>
        <Container>
          <Row className="pb-4">
            <Col sm={12} md={6} lg={6} xl={6}>
              <img className="border border-primary rounded-3 h-100" src={details[0]?.img} />
            </Col>
            <Col sm={12} md={6} lg={6} xl={6} className="mt-5 pt-3 ">
              <ListGroup vertical className="border border-primary rounded-3">
                <ListGroup.Item>
                  <h2 className="text-info">{details[0]?.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h2 className="text-primary">Service Details Id: {serviceId}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6 style={{ float: "left" }}>
                    Description : {details[0]?.description}
                  </h6>
                </ListGroup.Item>
              </ListGroup>
              <div >
                <Button className="btn btn-success mt-4">More Details</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </>
   
</div>
    );
};

export default ServiceDetails;