import React from 'react';
import appointmentbg from '../../../assets/images/appointment.png'
const HomeContact = () => {
    return (
        <div style={{ background: `url(${appointmentbg})`}} class="flex justify-center" >
            <div className="md:w-5/12 my-16 text-center ">
                <h3 className="text-primary font-bold ">Contact Us</h3>
                <h2 className="text-white text-4xl mb-10">Stay connected with us</h2>
                <form action="" className="">
                <input  type="text" placeholder="Email" class="input w-full mx-auto block mb-5 " />
                <input  type="text" placeholder="Subject" class="input w-full mx-auto block mb-5 " />
                <textarea  type="text" placeholder="Type here" class="textarea w-full mx-auto block mb-5 " />
                <button class="btn custom-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default HomeContact;