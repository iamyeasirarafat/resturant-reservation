import React from 'react';
import Banner from './Banner/Banner';
import HomeAppointment from './HomeAppointment/HomeAppointment';
import Service from './Service/Service';
import ServiceBanner from './ServiceBanner/ServiceBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <ServiceBanner></ServiceBanner>
            <HomeAppointment></HomeAppointment>
        </div>
    );
};

export default Home;