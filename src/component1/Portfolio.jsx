import image from '../Images/image.png'
import email from '../Images/email.png'
import css from '../Images/css.png'
import react from '../Images/react.png'
import html from '../Images/html.png'
import javascript from '../Images/javascript.png'


function Portfolio () {
    return( 
    <main className="Portfolio">

<div className='Nav'>
      <h1 className='PortfolioTitle'>My Portfolio</h1>
      <ul className='Navbarul'>
          <li className='Navbarli'></li>
          <li><a href='#About'>About</a></li>
          <li><a href='#Experience' >Experience</a></li>
          <li><a href='#Contact' >Contact</a></li>
          <li><a href='#Projects'>Projects</a></li>
      </ul>
  </div>

  <section className='SectionH' id="About">
      <div>    
        <h1>Hi! I am Rachael</h1>
    <p>I am a Front-End developer earnestly seeking internship to grow in my career.</p></div>
<div className='Img-Box'>
    <img src={image} alt="portfolio" className='Portfolioimg'/>
    </div>
 
</section>

<main id="Experience">
      <h1 className='MyS'>My Skills</h1>
    <section className='SectionE' id="skills">
      
        <div>
     <img src={html} alt='htmllogo'/> 
      <p>HTML</p>
      </div>
      <div>
      <img src={css} alt='csslogo'/>
      <p>CSS</p> 
      </div>
       <div>
      <img src={javascript} alt='JavascriptLogo'/>
      <p>Javascript</p>
      </div> 
      <div>
      <img src={react} alt='reactLogo'/>
      <p>React</p> 
      </div>
    </section>
    <div className='Projects' id="Projects">
    <h1 className='MyS'>Projects</h1>

   
        <p className='description'>I have worked on some projects. The websites are mobile responsive deploying the skills mentioned above. Click on the listed projects to view:</p>
        <div>
            <ul>
               
            <li><a href='https://rachkem01.github.io/myreactapps/' target='_blank' rel='noreferrer'>Akube Shoes Store</a></li>
            <li><a href='https://rachkem01.github.io/Indelible-Meals/' target='_blank' rel='noreferrer'>Indelible Meals</a></li>
            <li><a href='https://rachkem01.github.io/BR-Architect/' target='_blank' rel='noreferrer'>BR Architect</a></li>
            <li><a href='https://rachkem01.github.io/Taste-Filled-Restaurant/' target='_blank' rel='noreferrer'>Taste Filled Restaurant</a></li>
            <li><a href='https://rachkem01.github.io/Palindrome-App/'  target='_blank' rel='noreferrer'>Palindrome App</a></li>
                <li><a href='https://rachkem01.github.io/Rachael-Portfolio/' target='_blank' rel='noreferrer'>Portfolio Demo</a></li>
                <li><a href='https://rachkem01.github.io/Exquisite-Clothing-web/' target='_blank' rel='noreferrer'>Exquisite Clothing</a></li>
             
                
            </ul>
        </div>
    </div>
    </main>

    <div className='MyContact' id='Contact'>
     
     <div><p className='Feel'>Feel free to reach me anytime:</p></div>
    <div> <a href="mailto:agunlokokemi01@gmail.com"><img src={email} alt="email" className='Email'/></a></div>
    <div> <p>07033836590</p></div>
     
     
       
        </div>

    </main>
    )
}
export default Portfolio