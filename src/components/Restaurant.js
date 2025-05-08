import { IMG_URL } from "../util/constants"
export const RestaurantCard = (props) => {
    
    const {name, cloudinaryImageId, costForTwo, cuisines, avgRating} = props.resObj.info
    return (
    <div className='p-4 m-2 w-[200px] hover:bg-yellow-200 cursor-pointer'>
        <img className="rounded-lg" alt='res-logo' src={`${IMG_URL}/${cloudinaryImageId}`}></img>
        <h3 className="text-lg font-semibold">{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
    </div>
    )
}

export const RestaurantCardTopRated = (RestaurantCard) => {
    return (props) => {        
        return (
            <div>
                <label className="absolute bg-black text-white m-1 p-1 rounded-lg">TopRated</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}