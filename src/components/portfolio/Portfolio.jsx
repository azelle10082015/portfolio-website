import React from 'react'
import './portfolio.css'
import Birthday from '../../Assets/Birthday reminder.jpeg'
import toDo from '../../Assets/ToD-list.jpeg'
import deliver from '../../Assets/delivery.jpeg'
import passenger from '../../Assets/passenger.jpeg'
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Personal Work</h5>
      <h2>Portfolio</h2>
       
      <div className="container portfolio__container" >
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Birthday} alt="" />
          </div>
          <h3>My Family Birthday Reminder</h3>
         <div className="portfolio__item-cta">
            <a href='https://github.com/azelle10082015/Familly-Birthday' className='btn btn-primary' target='_blank'>My Github Project</a>
          </div>
        </article>
          
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={toDo} alt="" />
          </div>
          <h3>ToDo-list App</h3>
         <div className="portfolio__item-cta">
            <a href='https://github.com/azelle10082015/ToDo-List' className='btn btn-primary' target='_blank'>My Github Project</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={deliver} alt="" />
          </div>
          <h3>Delivery App</h3><i>incomplete project</i>
         <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn btn-primary' target='_blank'>My Github Project</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={passenger} alt="" />
          </div>
          <h3>Passenger: My rider App</h3><i>incomplete project</i>
         <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn btn-primary' target='_blank'>My Github Project</a>
          </div>
        </article>
       
      </div>


    </section>
  )
}

export default Portfolio