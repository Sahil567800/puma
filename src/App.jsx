
import './App.css'
import Header from './header'
import BannerSec from './bannersec'
import ShoeSec from './shoeSec'
import ImgSec from './imgsec'
import Footer from './footer'
import pumaBanner1 from "./assets/pumaBanner.jpg"
import pumaBanner2 from "./assets/bannerimg2.jpeg"
function App() {


  return (
    <>
      <Header />
      <BannerSec pumaBanner ={pumaBanner1} heading="NEW STYLES ON THE BLOCK"  heading2="AVANTI BY RIHANNA "/>
      <ShoeSec />
      <ImgSec />
      <BannerSec pumaBanner={pumaBanner2} heading="PUMA X one8" heading2 =" EFFORTLESS STYLE"/>
      <ImgSec />
      <Footer/>
    </>
  )
}

export default App
