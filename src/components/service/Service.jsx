import React from 'react'
import './service.css'
import {BsFillPersonCheckFill} from 'react-icons/bs'

function Service() {
  return (
    <section id='service'>
      <h5>what I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container" >
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
       
          <ul className="service__list">
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>Matching your chosen web page colors and the variant colors</p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/><p>Matching Your website picture and the brightness </p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>Building your page structure using Html semantic tag</p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>Easy navigation and accessibility for users </p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>Good Readability and visualization of the text and icons on your page</p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/><p>Consistency of the chosen design; color, animation on your entire page</p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>Responsibility on different devise size</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>React Development</h3>
          </div>
       
          <ul className="service__list">
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>Mastery all React concepts: React class and Hooks</p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>React useState, useReducer and Redux for state management</p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>Using css or css framework in your React project</p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>API call in your React project to communicate with your server</p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>Using life cycle methods for your class component</p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>Using React and Typescript</p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>Learning React Native</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
       
          <ul className="service__list">
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>UI/UX Design using CSS and CSS framework</p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>Launching Website and Web-page</p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>Web application for Android and ios</p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p></p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>Portfolio website</p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>E-Commerce website</p>
            </li>
            <li>
               <BsFillPersonCheckFill className='service__list-icon'/>
               <p>Clown website</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Service