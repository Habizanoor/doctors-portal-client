import React from 'react';
import quotes from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Contact from './Contact';
import Review from './Review';



const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            img: people1,
            location: 'california',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id:2,
            name: 'Winson Herry',
            img: people2,
            location: 'california',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id:3,
            name: 'Winson Herry',
            img: people3,
            location: 'california',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }
    ]
    return (
       <section className='my-28'>
           <div className='flex justify-between'>
               <div>
                   <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                   <h2 className='text-3xl'>What our Patients say</h2>
               </div>
               <div>
                   <img className='lg:w-48 w-24' src={quotes} alt="" />
               </div>

           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                   reviews.map(review=> <Review
                   key={review._id}
                   review={review}
                   ></Review>)
               }
           </div>
           <Contact></Contact>
       </section>
    );
};

export default Testimonials;