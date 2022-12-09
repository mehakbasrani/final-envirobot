import './header.scss'
import logo from'./logo.png'

const Header = () => {
  return (
    <div className='header'>
      <div className="innerwrapper">
         <div className='innerleft'>
           <a href="#intro">
                <img src={logo} alt="" width='130px' height='80px'/>
             </a>
          </div>
          <div className='innerright'>
              <h3 >EnviroBot</h3>
              <p>Think Green, Act Green</p>
          </div>
      </div>
    </div>
  )
}

export default Header
