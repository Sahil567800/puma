/* eslint-disable react/prop-types */

const ImgCard = (props) => {
    return (
        <>
            <div className="ImgCard ">
                <img src={props.img} alt="image" />
                <h2>{props.title}</h2>
                <button>{props.button}</button>
            </div>
        </>
    )
}
export default ImgCard;