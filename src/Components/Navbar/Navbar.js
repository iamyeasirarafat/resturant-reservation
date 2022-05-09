import React from 'react';

const Navbar = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="navbar bg-base-100 ">
        <div className="navbar-start ">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabindex="0">
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className=" normal-case text-xl">Doctors Portal</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal ">
      <li><a className="btn btn-ghost items-center rounded-md">Home</a></li>
      <li><a className="btn btn-ghost items-center">About</a></li>
      <li><a className="btn btn-ghost items-center">Appointment</a></li>
      <li><a className="btn btn-ghost items-center">Reviews</a></li>
      <li><a className="btn btn-ghost items-center">Contact Us</a></li>
      <li><a className="btn btn-ghost items-center rounded-md">login</a></li>
      
    </ul>
  </div>
        </div>
        </div>
    );
};

export default Navbar;