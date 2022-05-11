import React from 'react';

const AppointmentCard = ({service}) => {
    const{name, slots} = service;
    return (
        <div className="shadow-md rounded-md py-11 text-center">
           <h2 className="text-primary text-xl mb-2 font-semibold">{name}</h2>
           <h4 className="text-accent ">{slots.length ? slots[0] : ''}</h4>
           <h4 className="text-accent ">{slots.length ? `${slots.length} SPACES AVAILABLE ` : 'PlEASE TRY ANOTHER DAY'}</h4>
           <button disabled={slots.length === 0 } className="btn mt-5 custom-btn">Book appointment</button>
        </div>
    );
};

export default AppointmentCard;