
import './App.css'
import Header from './header'
import BannerSec from './bannersec'
import ShoeSec from './shoeSec'
import ImgSec from './imgsec'
import Footer from './footer'
import pumaBanner1 from "./assets/pumaBanner.jpg"
import pumaBanner2 from "./assets/bannerimg2.jpeg"
import ImgCard from "./imgCard.jsx"
import cardImg1 from "./assets/imgCard1.jpeg"
import cardImg2 from "./assets/imgCard2.jpeg"
import cardImg3 from "./assets/imgCard3.jpeg"
import cardImg4 from "./assets/imgCard4.jpeg"
import cardImg5 from "./assets/imgCard5.jpeg"
import cardImg6 from "./assets/imgCard6.jpeg"
import cardImg7 from "./assets/imgCard7.jpeg"
import cardImg8 from "./assets/imgCard8.jpeg"
function App() {


  return (
    <>
      <Header />
      <BannerSec pumaBanner={pumaBanner1} heading="NEW STYLES ON THE BLOCK" heading2="AVANTI BY RIHANNA " />
      <ShoeSec />
      <ImgSec >
        <ImgCard img={cardImg1} title="STREETWEAR STAPLES" button="SHOP NOW" />
        <ImgCard img={cardImg2} title="NIGHTOUT LOOKS" button="SHOP NOW" />
        <ImgCard img={cardImg3} title="PLAYFUL OUTINGS" button="SHOP NOW" />
        <ImgCard img={cardImg4} title="THE FESTIVE EDIT" button="SHOP NOW" />
      </ImgSec>
      <BannerSec pumaBanner={pumaBanner2} heading="PUMA X one8" heading2=" EFFORTLESS STYLE" />
      <ImgSec >
      <ImgCard img={cardImg5} title="PUMA SPEEDCAT" button="SHOP NOW" />
        <ImgCard img={cardImg6} title="WINTERWEAR" button="SHOP NOW" />
        <ImgCard img={cardImg7} title="PUMA X LMC" button="SHOP NOW" />
        <ImgCard img={cardImg8} title="THE SCRIBBLE PACK" button="SHOP NOW" />
      </ImgSec>
      <Footer />
    </>
  )
}

export default App
