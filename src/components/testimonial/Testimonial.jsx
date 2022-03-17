import React from 'react'
import './testimonial.css'
import person1 from '../../Assets/person1.jpeg';
import person2 from '../../Assets/person6.jpeg';
import person3 from '../../Assets/person3.jpeg';
import person4 from '../../Assets/person4.jpeg';

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Testimonial() {
  return (
    <section id='testimonials'>
      <h5>Review from visitors</h5>
      <h2>TESTIMONIALs</h2>

      <Swiper className="container testimonials__container"

      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >

        <SwiperSlide key={1} className='testimonial'>
          <div className="client__avatar">
            <img src={person1} alt="" />
          </div>  
            <h5 className='client__name'>Linda</h5>
            <small className="client__review">
            I got a change to work with Edouard during the time when my
            company needed to implement new features to our online platform,
            I was impressed by his performance and knowledge;
            he doest not stop until the job gets done correctly and completely.
             My company was really satisfied of result and I was rewarded, thanks to Edouard!
             <br />
             <i>--Client--</i>
            </small>
          
        </SwiperSlide>
        <SwiperSlide key={2} className='testimonial'>
          <div className="client__avatar">
            <img src={person2} alt="" />
          </div> 
            <h5 className='client__name'>Mayowa</h5>
            <small className="client__review">
             First as friend, I can testify of your kindness, your 
             positive personality and the love your shared round you 
             for the last 3years. Secondly, as coworker I was privileged
             to witness how you shared your kindness in the work efforts;
             so thank you bro!
             <br />
             <i>--Coworker--</i>
            </small>
         
        </SwiperSlide>
        <SwiperSlide key={3} className='testimonial'>
          <div className="client__avatar">
            <img src={person3} alt="" />
          </div>
            <h5 className='client__name'>Edward</h5>
            <small className="client__review">
              My freelance team success is a direct result of your 
              efforts. We hope you know how valuable and important
               you have been to this group.Your work ethic blows us
                all away. Thank you for the late nights, the early 
                mornings, and all the projects successfully completed 
                for the team.
                <br />
                <i>--Team manager--</i>
            </small>
          
        </SwiperSlide>
        <SwiperSlide key={4} className='testimonial'>
          <div className="client__avatar">
            <img src={person4} alt="" />
          </div>
            <h5 className='client__name'>Paul</h5>
            <small className="client__review">
             I knew you for just an year from when a join the team 
             and you made my integration so easy and thought me so much
             and if I can call myself a web developer it's because of you.
             It means so much that I could always depend on you.

            </small>
          
        </SwiperSlide>

      </Swiper>
     

    </section>
  )
}

export default Testimonial