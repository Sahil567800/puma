import ImgCard from "./imgCard.jsx"
import cardImg1 from "./assets/imgCard1.jpeg"
import cardImg2 from "./assets/imgCard2.jpeg"
import cardImg3 from "./assets/imgCard3.jpeg"
import cardImg4 from "./assets/imgCard4.jpeg"
const ImgSec = () => {
    return (
        <>
            <section id="imgSec">
                <div className="container">
                    <div className="row justify-c">
                        <h1>PALERMO PLAYBOOK</h1>
                    </div>
                    <div className="row justify-c">
                    <h4>style 'em your way</h4>
                </div>
                <div className="row">
                    <ImgCard img={cardImg1} title="STREETWEAR STAPLES" button="SHOP NOW" />
                    <ImgCard img={cardImg2} title="NIGHTOUT LOOKS" button="SHOP NOW" />
                    <ImgCard img={cardImg3}title="PLAYFUL OUTINGS" button="SHOP NOW" />
                    <ImgCard img={cardImg4} title="THE FESTIVE EDIT" button="SHOP NOW" />
                </div>
                </div>
                
            </section>
        </>
    )
}
export default ImgSec;