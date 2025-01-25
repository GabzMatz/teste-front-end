import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import RouletIcon from './components/rouletIcons/RouletIcon';
import Carrousel from './components/carrousel/Carrousel';
import Partners from './components/partners/Partners';
import Brands from './components/brands/Brands';
import Footer from './components/footer/Footer';

import "./index.scss";
import "../src/assets/fonts/font.scss"

function App() {
  return (
      <div className='defaultLayout'>
        <Navbar/>
        <Banner/>
        <RouletIcon/>
        <Carrousel nav={true}/>
        <Partners/>
        <Carrousel nav={false}/>
        <Partners/>
        <Brands/>
        <Carrousel nav={false}/>
        <Footer/>
      </div> 
  )
}

export default App
