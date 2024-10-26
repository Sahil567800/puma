import ShoeCard from "./shoecard"
import shoe1 from "./assets/shoe1.avif"
import shoe2 from "./assets/shoe2.avif"
import shoe3 from "./assets/shoe6.avif"
import shoe4 from "./assets/shoe4.avif"
const ShoeSec = ()=>{
    return(
        <>
         <section  className='w-full'>
          <div className="container">
            <div className="row">
            <h2 className='heading text-2xl font-bold my-6 justify-center'>PUMA SPOTLIGHT</h2>
            </div>
            <div className="row ">
            <ShoeCard price="₹1,399" dprice="₹5,499" shoeimg={shoe1} name="PUMA Club 5v5 SD Unisex Sneakers" />
        <ShoeCard price="₹3,639" dprice="₹6,999" shoeimg={shoe2} name="Tazon 7 Evo Unisex Running Shoes" />
        <ShoeCard price="₹3,139" dprice="₹5,499" shoeimg={shoe3} name="FlexFocus Lite Unisex Running Shoes" />
        <ShoeCard price="₹2,639" dprice="₹6,999" shoeimg={shoe4} name="BMW M Motorsport Unisex Driving Shoes" />
            </div>
          </div>
        
        <div className="flex flex-row justify-between"> 
       
        </div>
       
      </section>
        </>
    )
}
export default ShoeSec;