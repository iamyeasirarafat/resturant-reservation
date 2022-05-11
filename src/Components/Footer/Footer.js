import React from 'react';
import footerbg from '../../assets/images/footer.png'
const Footer = () => {
    return (
        <footer style={{
            background: `url(${footerbg})`,
            backgroundPosition: 'center'
        }} class="  ">
            <div className="footer w-10/12 mx-auto p-10">
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </div>
            <footer class="footer footer-center p-4 md:mt-20 ">
                <div>
                    <p>Copyright © 2022 - All right reserved by <span class="text-secondary">Doctors Portal</span> Ltd</p>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;