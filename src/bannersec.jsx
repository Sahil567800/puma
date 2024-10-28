import pumaBanner from "./assets/pumaBanner.jpg"
const BannerSec =(props)=>{
    return(
        <>
        <section id="bannerMain">
            <div className="banner-img">
              <img src={props.pumaBanner} alt="puma banner" />
            </div>
            <div className="banner-text">
                <h2>{props.heading}</h2>
                <h4>{props.heading2}</h4>
                <button>SHOP NOW</button>
                
            </div>
        </section>
        </>
    )
}
export default BannerSec;