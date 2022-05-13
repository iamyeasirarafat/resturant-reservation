import React, { useEffect, useState } from 'react';
import banner from "../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns/esm';
import AppointmentCard from './AppointmentCard';
import AppointmentModal from './AppointmentModal';
const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState({})
   
    useEffect(() => {
        fetch('services.json')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[]);
    const appointmentBtnHandler = (service) =>{
        setTreatment(service)
        
    }
    return (
        <div>
             <div className="banner mb-28 md:mb-0">
            <div className="md:grid grid-cols-2 w-8/12  mx-auto h-[80vh] items-center ">
                <div className="md:order-last">
                    <img className="md:w-full mb-10 mx-auto" src={banner} alt="" />
                </div>
                <div className="">
                <DayPicker 
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                />
                </div>
            </div>
            </div>
            <div className="banner-shadow md:pt-10">
                <h2 className="text-center text-primary text-lg md:text-2xl mb-16 md:mb-28">Available Appointments on {format(selectedDate, 'PPPP')}</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-9 w-11/12 mb-32 mx-auto mb">
                {
                    services.map(service => <AppointmentCard btnhandler={appointmentBtnHandler} key={service._id} service={service}></AppointmentCard>)
                }
                </div>
            </div>
            <AppointmentModal date={selectedDate} service={treatment}></AppointmentModal>
        </div>
    );
};

export default Appointment;