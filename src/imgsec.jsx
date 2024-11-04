/* eslint-disable react/prop-types */

const ImgSec = (props) => {
    return (
        <>
            <section id="imgSec">
                <div className="continer">
                    <div className="raw justify-c">
                        <h1>PALERMO PLAYBOOK</h1>
                    </div>
                    <div className="raw justify-c">
                    <h4>style `em your way</h4>
                </div>
                <div className="raw">
                    {props.children}
                </div>
                </div>
                
            </section>
        </>
    )
}
export default ImgSec;