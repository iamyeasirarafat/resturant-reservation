import React from 'react';
import babypic from "../../../assets/images/treatment.png"
const ServiceBanner = () => {
    return (
        <div className="w-9/12 mx-auto ">
            <div class="hero">
                <div class="hero-content flex-col md:flex-row mb-36 gap-x-24">
                    <img src={babypic} class="max-w-sm mt-12 rounded-lg shadow-2xl" alt="" />
                    <div>
                        <h1 class="text-5xl text-accent mt-12 font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn custom-btn">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;