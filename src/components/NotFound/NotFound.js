import React from 'react';
import './NotFound.css'
import notFound from '../../images/404.png'
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
        <img src={notFound} alt="" />
        <Link to="/"><Button variant="primary" >Go Back</Button></Link>
    </div>
    );
};

export default NotFound;