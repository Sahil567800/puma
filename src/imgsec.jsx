/* eslint-disable react/prop-types */

const ImgSec = (props) => {
    return (
        <>
            <section id="imgSec">
                <div className="container">
                    <div className="row justify-c">
                        <h1>PALERMO PLAYBOOK</h1>
                    </div>
                    <div className="row justify-c">
                    <h4>style `em your way</h4>
                </div>
                <div className="row">
                    {props.children}
                </div>
                </div>
                
            </section>
        </>
    )
}
export default ImgSec;