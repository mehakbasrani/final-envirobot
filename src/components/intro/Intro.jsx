import './intro.scss'
 import Typewriter from "typewriter-effect";
 

const Intro = () => {
  return (
    <div className='intro'>
      
     <div className='slideIn'>
    
      <h4>Together We Can</h4>
      <h2><Typewriter
            options={{
              strings: ['Reduce' ,'Reuse','Recycle','Restore the Planet'],
              autoStart: true,
              loop: true,
            }}
            />  </h2> 
           
            </div>
  </div>
  )
}

export default Intro
