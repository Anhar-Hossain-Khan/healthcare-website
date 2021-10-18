import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('/services.json')
        .then(response => response.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="container">
            <div className="top">
            <h2>Our <span>Services</span></h2>
            </div>
            <input className="service" type="text" placeholder="Search your Services" />
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services?.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
         </div>
    );
};

export default Services;