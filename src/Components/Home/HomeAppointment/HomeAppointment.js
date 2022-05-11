import React from 'react';
import appointmentbg from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor-small.png'
const HomeAppointment = () => {
    return (
        <div>
            <div style={{ background: `url(${appointmentbg})`}} class="hero mb-20" >
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="flex items-center w-10/12 mx-auto">
                    <img class="flex-1 hidden md:block  mt-[-100px]" src={doctor} alt="" />
                    <div class="flex-1 my-20">
                        <h2 class="text-xl text-primary font-semibold">Appointment</h2>
                        <h1 class="mb-5 text-5xl text-white font-bold">Make an appointment Today</h1>
                        <p class="mb-10 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn custom-btn">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAppointment;