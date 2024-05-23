import RestaurantCard from "./RestaurantCard";
import { useState, useEffect ,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import User from "./User";

const Body = () => {

    const [searchText, setSearchText] = useState("");

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const {setUserName ,loggedInUser} = useContext(UserContext);

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return(<h1>
            Looks like you are offline .
        </h1>);
    }

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex">
                <div className="m-3 p-3">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                        console.log("change");
                    }} />
                    <button className="px-4 py-2 bg-green-100 m-4  rounded-lg"  
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurant.filter((res) => {
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                            });
                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >
                    Search</button>
                </div>
                <div className="m-3 p-3">
                    <button  
                    className="px-4 py-2 bg-gray-100 m-4 rounded-lg" 
                    onClick={() => {
                        const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                        setListOfRestaurant(filteredList);
                        }}
                    >Top Rated Restaurant</button>
                </div>
                <div className="m-3 p-3 flex items-center">
                    <label className="p-2">Username : </label>
                    <input className="border border-solid border-black" value={loggedInUser} onChange={(e)=>{
                        setUserName(e.target.value);
                    }}/>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link  key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>)
};

export default Body;