import React from 'react';

const AppointmentCard = ({service, btnhandler}) => {
    const{name, slots} = service;
    return (
        <div className="shadow-md rounded-md py-11 text-center">
           <h2 className="text-primary text-xl mb-2 font-semibold">{name}</h2>
           <h4 className="text-accent ">{slots.length ? slots[0] : ''}</h4>
           <h4 className="text-accent ">{slots.length ? `${slots.length} SPACES AVAILABLE ` : 'PlEASE TRY ANOTHER DAY'}</h4>
           <label disabled={slots.length === 0 } onClick={()=>btnhandler(service)} className="btn mt-5 custom-btn" htmlFor="appointment-modal">Book appointment</label>
           
        </div>
    );
};

export default AppointmentCard;