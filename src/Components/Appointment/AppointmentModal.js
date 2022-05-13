import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ service, date }) => {
    const { name, slots } = service;

    const handleformsubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
    }
    return (
        <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg mb-9 font-bold">{name}</h3>
                    <form onSubmit={handleformsubmit} className="md:ml-16">
                        <input type="text" disabled value={format(date, 'PPPP')} className="input mb-3  input-sm input-bordered w-full max-w-xs" />
                        <select className="select select-sm mb-3 select-bordered w-full max-w-xs">
                           {
                               slots?.map((slot, i)=><option key={i} value={slot}>{slot}</option>)
                           }
                        
                        </select>
                        <input type="text" placeholder="Your Name" className="input mb-3   input-bordered w-full max-w-xs" />
                        <input type="email" placeholder="Your Email" className="input mb-3   input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Your Phone" className="input mb-3  input-bordered w-full max-w-xs" />
                       <button> <label type="submit" className="btn" htmlFor="appointment-modal">Submit</label></button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AppointmentModal;