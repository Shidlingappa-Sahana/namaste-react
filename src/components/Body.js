import { RestaurantCard, RestaurantCardTopRated } from './Restaurant'
import { useState, useEffect } from "react"
import { Shimmer } from "./shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from '../util/useOnlineStatus'

export const Body = () => {
    const [resList, setresList] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])

    const [btnText, setBtnText] = useState("")

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const data = await res.json()
        const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setresList(restaurants)
        setFilteredRestaurant(restaurants)
    }
    const onlineStatus = useOnlineStatus()
    const TopRatedRestaurantCard = RestaurantCardTopRated(RestaurantCard)
    if(onlineStatus===false) return <h1>Looks like Something went wrong, Please check you internet connection!!!</h1>

    if(resList.length===0){
        return <Shimmer/>
    }

    return resList.length===0? <Shimmer/> : (
        <div className='body'>
            <div className='filter flex'>
                <div className="search m-4 p-4">
                <input type="text" className="border border-black border-solid" value={btnText} onChange={(e)=>{
                    const btnTextUpdated=e.target.value
                    setBtnText(btnTextUpdated)
                }}/>
                <button className="px-2 py-1 m-2 bg-green-200 rounded-lg" onClick={()=>{
                    const filteredRestaurant=resList.filter(res=>res.info.name.toLowerCase().includes(btnText.toLowerCase()))
                    
                    setFilteredRestaurant(filteredRestaurant)
                }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                    const fileredList = resList.filter((restaurant) =>

                        restaurant.info.avgRating > 4.5
                    )
                    setFilteredRestaurant(fileredList)

                }}>Top Rated Restaurant</button>
                </div>
            </div>
            <div className='p-2 m-2 flex flex-wrap'>
                {filteredRestaurant.map((restaurant) =>
                    <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id} >
                    {
                        restaurant.info.avgRating > 4.5 ? <TopRatedRestaurantCard key={restaurant.info.id} resObj={restaurant}/> : <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
                    }
                    </Link>)}
            </div>
        </div>
    )
}