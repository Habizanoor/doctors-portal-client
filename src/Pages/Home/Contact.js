import React from 'react';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div style={{ background: `url(${appointment})` }} className='p-20 my-20'>
            <h4 className='text-primary text-center font-bold'>Contact Us</h4>
            <h2 className='text-3xl text-center text-white'>Stay connected with us</h2>
            <div className="card flex-shrink-0 w-full mx-auto mt-5 max-w-sm shadow-2xl bg-base-100">

                <div className="card-body">
                    <div className="form-control">

                        <input type="text" placeholder="Email Address" className="input input-bordered" />
                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Subject" className="input input-bordered" />
                    </div>
                    <div className="form-control">

                        <textarea className="textarea textarea-bordered" placeholder="Your message"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;