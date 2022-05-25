import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';


const MakeAppointment = () => {
    return (
        <section style={{ background:`url(${appointment})`}} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-10'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-white text-3xl'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tempora quia at in accusantium hic amet corrupti inventore quod dignissimos eos nobis accusamus deleniti iste doloremque voluptatum omnis earum modi quisquam autem veniam harum officiis! Vel voluptate rerum minus placeat.</p>
                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>

            </div>
        </section>
    );
};

export default MakeAppointment;