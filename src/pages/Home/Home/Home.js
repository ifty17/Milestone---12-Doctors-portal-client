import React from 'react';
import InfoCards from '../InfoCards/InfoCards';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import Treatment from './Treatment/Treatment';

const Home = () => {
    return (
        <div className='mx-5 lg:mx-20'>
          <Banner/>
          <InfoCards></InfoCards>
          <Services></Services>
          <Treatment></Treatment>
          <MakeAppointment></MakeAppointment>
          <Reviews></Reviews>
          <ContactUs></ContactUs>
        </div>
    );
};

export default Home;