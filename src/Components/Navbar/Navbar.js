import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start ">
          <div className="absolute dropdown right-0">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact right-2/4 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink to="/" style={({ isActive }) => {
                return {

                  background: isActive ? "#3A4256" : "",
                  color: isActive ? 'white' : '',
                };
              }} className="btn bg-transparent btn-ghost items-center rounded-md">Home</NavLink></li>
              <li><NavLink to="/about" style={({ isActive }) => {
                return {

                  background: isActive ? "#3A4256" : "",
                  color: isActive ? 'white' : '',
                };
              }} className="btn bg-transparent btn-ghost items-center">About</NavLink></li>
              <li><NavLink to="/appointment" style={({ isActive }) => {
                return {

                  background: isActive ? "#3A4256" : "",
                  color: isActive ? 'white' : '',
                };
              }} className="btn bg-transparent btn-ghost items-center">Appointment</NavLink></li>
              <li><NavLink to="/reviews" style={({ isActive }) => {
                return {

                  background: isActive ? "#3A4256" : "",
                  color: isActive ? 'white' : '',
                };
              }} className="btn bg-transparent btn-ghost items-center">Reviews</NavLink></li>
              <li><NavLink to="/contact" style={({ isActive }) => {
                return {

                  background: isActive ? "#3A4256" : "",
                  color: isActive ? 'white' : '',
                };
              }} className="btn bg-transparent btn-ghost items-center">Contact Us</NavLink></li>
              <li><NavLink to="/login"
                style={({ isActive }) => {
                  return {

                    background: isActive ? "#3A4256" : "",
                    color: isActive ? 'white' : '',
                  };
                }} className="btn bg-transparent btn-ghost items-center rounded-md">login</NavLink></li>
            </ul>
          </div>
          <a className=" normal-case text-xl">Doctors Portal</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <li><NavLink to="/" style={({ isActive }) => {
              return {

                background: isActive ? "#3A4256" : "",
                color: isActive ? 'white' : '',
              };
            }} className="btn bg-transparent btn-ghost items-center rounded-md">Home</NavLink></li>
            <li><NavLink to="/about" style={({ isActive }) => {
              return {

                background: isActive ? "#3A4256" : "",
                color: isActive ? 'white' : '',
              };
            }} className="btn bg-transparent btn-ghost items-center">About</NavLink></li>
            <li><NavLink to="/appointment" style={({ isActive }) => {
              return {

                background: isActive ? "#3A4256" : "",
                color: isActive ? 'white' : '',
              };
            }} className="btn bg-transparent btn-ghost items-center">Appointment</NavLink></li>
            <li><NavLink to="/reviews" style={({ isActive }) => {
              return {

                background: isActive ? "#3A4256" : "",
                color: isActive ? 'white' : '',
              };
            }} className="btn bg-transparent btn-ghost items-center">Reviews</NavLink></li>
            <li><NavLink to="/contact" style={({ isActive }) => {
              return {

                background: isActive ? "#3A4256" : "",
                color: isActive ? 'white' : '',
              };
            }} className="btn bg-transparent btn-ghost items-center">Contact Us</NavLink></li>
            <li><NavLink to="/login"
              style={({ isActive }) => {
                return {

                  background: isActive ? "#3A4256" : "",
                  color: isActive ? 'white' : '',
                };
              }} className="btn bg-transparent btn-ghost items-center rounded-md">login</NavLink></li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;