import React from 'react';
import banner from "../../../assets/images/chair.png";
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <div className="md:grid grid-cols-2 w-11/12 mx-auto h-[100vh] items-center ">
                <div className="md:order-last">
                    <img className="md:w-9/12 mb-10 mx-auto" src={banner} alt="" />
                </div>
                <div className="">
                    <h2 className="text-5xl text-accent font-semibold w-10/12 mb-4">Your New Smile Starts Here</h2>
                    <p className="text-accent text-base mb-11">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn custom-btn">get started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;