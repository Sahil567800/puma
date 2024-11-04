
import './App.css'
import Header from './header'
import BannerSec from './bannersec'
import ShoeSec from './shoeSec'
import ImgSec from './imgsec'
import Footer from './footer'
//banners
import pumaBanner1 from "./assets/pumaBanner.jpg"
import pumaBanner2 from "./assets/bannerimg2.jpeg"
// imagecard
import ImgCard from "./imgCard.jsx"
import cardImg1 from "./assets/imgCard1.jpeg"
import cardImg2 from "./assets/imgCard2.jpeg"
import cardImg3 from "./assets/imgCard3.jpeg"
import cardImg4 from "./assets/imgCard4.jpeg"
import cardImg5 from "./assets/imgCard5.jpeg"
import cardImg6 from "./assets/imgCard6.jpeg"
import cardImg7 from "./assets/imgCard7.jpeg"
import cardImg8 from "./assets/imgCard8.jpeg"
//shoes
import ShoeCard from "./shoecard"
import shoe1 from "./assets/shoe1.avif"
import shoe2 from "./assets/shoe2.avif"
import shoe3 from "./assets/shoe6.avif"
import shoe4 from "./assets/shoe4.avif"
import shoe5 from "./assets/shoe7.avif"
import shoe6 from "./assets/shoe8.avif"
import shoe7 from "./assets/shoe9.avif"
import shoe8 from "./assets/shoe10.avif"
import { BuySec } from './buysec.jsx'


function App() {


  return (
    <>
      <Header />
      <BannerSec pumaBanner={pumaBanner1} heading="NEW STYLES ON THE BLOCK" heading2="AVANTI BY RIHANNA " />
      <ShoeSec heading ="PUMA SPOTLIGHT" >
      <ShoeCard price="₹1,399" dprice="₹5,499" shoeimg={shoe1} name="PUMA Club 5v5 SD Unisex Sneakers" />
        <ShoeCard price="₹3,639" dprice="₹6,999" shoeimg={shoe2} name="Tazon 7 Evo Unisex Running Shoes" />
        <ShoeCard price="₹3,139" dprice="₹5,499" shoeimg={shoe3} name="FlexFocus Lite Unisex Running Shoes" />
        <ShoeCard price="₹2,639" dprice="₹6,999" shoeimg={shoe4} name="BMW M Motorsport Unisex Driving Shoes" />
      </ShoeSec>
      <ImgSec >
        <ImgCard img={cardImg1} title="STREETWEAR STAPLES" button="SHOP NOW" />
        <ImgCard img={cardImg2} title="THE SCRIBBLE PACK" button="SHOP NOW" />
        <ImgCard img={cardImg3} title="PLAYFUL OUTINGS" button="SHOP NOW" />
        <ImgCard img={cardImg4} title="THE FESTIVE EDIT" button="SHOP NOW" />
      </ImgSec>
      <BannerSec pumaBanner={pumaBanner2} heading="PUMA X one8" heading2=" EFFORTLESS STYLE" />
      <ImgSec >
      <ImgCard img={cardImg5} title="PUMA SPEEDCAT" button="SHOP NOW" />
        <ImgCard img={cardImg6} title="WINTERWEAR" button="SHOP NOW" />
        <ImgCard img={cardImg7} title="PUMA X LMC" button="SHOP NOW" />
        <ImgCard img={cardImg8} title="NIGHTOUT LOOKS" button="SHOP NOW" />
      </ImgSec>
      <ShoeSec heading ="PUMA HIGHLIGHTS">
      <ShoeCard price="₹1,399" dprice="₹5,499" shoeimg={shoe5} name="PUMA SMASHIC Unisex Sneakers" />
        <ShoeCard price="₹2,319" dprice="₹3,999" shoeimg={shoe6} name="PUMA DEXFLY V1 MEN`S sneakers" />
        <ShoeCard price="₹4,199" dprice="₹5,499" shoeimg={shoe7} name="PUMA CAVON 2.0 Unisex sneakers"  />
        <ShoeCard price="₹2,919" dprice="₹6,499" shoeimg={shoe8} name="PUMA GRAVITON 2.0 Unisex sneakers" />
      </ShoeSec>
      <BuySec/>
      <Footer />
    </>
  )
}

export default App
