import pumaBanner from "./assets/pumaBanner.jpg"
const BannerSec =()=>{
    return(
        <>
        <section id="bannerMain">
            <div className="banner-img">
              <img src={pumaBanner} alt="puma banner" />
            </div>
            <div className="banner-text">
                <h2>NEW STYLES ON THE BLOCK</h2>
                <div className="buttons">
                <button>SHOP MEN</button>
                <button>SHOP WOMEN</button>
                <button>SHOP KIDS</button>
                </div>
                
            </div>
        </section>
        </>
    )
}
export default BannerSec;