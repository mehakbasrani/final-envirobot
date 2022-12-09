import './about.scss'
import logo from './logo.jpg'

const About = () => {
  return (
    <div className='about'>
     
     <hr /> 
     <div className="imgcontainer">
     <img src={logo} alt="" width='10%' height='23%'/>
     </div>
     <h2 id='quote'>A better, more sustainable world.</h2>
     
      
        <p>
         The EnviroBot is a smart recycling bot that helps the end-users efficiently reuse, reduce 
         & recycle their waste. You can ask the bot whether something can be recycled, find out about
         the nearest recycling points,  and it can give relevant useful information & facts to reuse
         or reduce the waste as well. Therefore, we can reduce plastics & overall carbon footprint of an individual.
         </p>
       </div>
   
  )
}

export default About
