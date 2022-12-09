import './App.scss';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Main from './components/main/Main';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="app">
     <Header/>
     <div className="sections">
       <Intro/>
       <About/>
       {/* <Main/> */}
       <Footer/>      
     </div>
    </div>
  );
}

export default App;
