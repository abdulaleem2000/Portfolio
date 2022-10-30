import React from 'react'
import './portfolio.css'
import flutter from '../../assets/flutter.png'
import android from '../../assets/AndroidStudio.png'
import java from '../../assets/Java-tutorials.jpg'

const data =[
  {
    id: 1,
    image: flutter,
    title: 'Mflix',
    github: 'https://github.com/abdulaleem2000/Mflix'
  },
  {
    id: 2,
    image: flutter,
    title: 'PPGBio',
    github: 'https://github.com/abdulaleem2000/App-for-recording-ppg-signals'
  },
  {
    id: 3,
    image: java,
    title: 'Restaurant Management System',
    github: 'https://github.com/abdulaleem2000/Restaurant-Management-System'
  },
  {
    id: 4,
    image: android,
    title: 'Fund Raising Application',
    github: 'https://github.com/abdulaleem2000/Fund-Raising-Application'
  },
  {
    id: 5,
    image: android,
    title: 'Chat App',
    github: 'https://github.com/abdulaleem2000/Messenger'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>  
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
    
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github})=>{
            return(
              <article key={id}  className='portfolio__item'>
              <div className="portfolio__item-image">
              <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className='github_link'>
              <a href={github} className='btn' target='_blank'>Github</a>
            </div>
           
            
          
        </article>
            )
          })
        }
    
        
      </div>
      
    </section>
  )
}

export default Portfolio