const ShoeCard = (props)=>{
    return(
        <>
        <div className=" w-72 mx-auto">
            <img className="w-72 h-72 my-2" src={props.shoeimg} alt="" />
            <div className="flex my-4">
            <h3 className=" font-bold">{props.name}</h3>
            <div className="flex flex-col">
            <h3 className=" font-bold text-red-700">{props.price}</h3>
            <h3 className=" line-through text-gray-500">{props.dprice}</h3>
            </div>
          
            </div>
            
        </div>
        </>
    )
}
export default ShoeCard;