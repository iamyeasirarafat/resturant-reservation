import React from 'react';
import HomeContact from './HomeContact/HomeContact';
import Banner from './Banner/Banner';
import HomeAppointment from './HomeAppointment/HomeAppointment';
import Service from './Service/Service';
import ServiceBanner from './ServiceBanner/ServiceBanner';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <ServiceBanner></ServiceBanner>
            <HomeAppointment></HomeAppointment>
            <Testimonial></Testimonial>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;