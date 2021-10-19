import React from 'react';
import Activities from '../Activities/Activities';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Services></Services>
         <Doctors></Doctors>
         <Activities></Activities>
        </div>
    );
};

export default Home;