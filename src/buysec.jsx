import shoe1 from "./assets/shoe1.avif"

export const BuySec = () => {
    return (
        <>
            <section id="BuySec">
                <div className="continer">
                    <div className="raw">
                        <h1>MEN`S</h1>
                        </div>
                    <div className="raw column">
                        <div className="buyImg">
                            <img src={shoe1} alt="" />
                        </div>
                        <div className="buyText">
                            <h2>PUMA Club 5v5 SD Unisex Sneakers</h2>
                            <h3>₹1,399</h3>
                            <h4>COLOR</h4>
                            <p>PUMA Black-Cool Mid Gray-PUMA Silver-PUMA White</p>
                            <button>ADD TO CART</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}