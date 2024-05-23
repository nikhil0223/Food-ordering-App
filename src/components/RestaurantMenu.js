import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./ResCategory";
import { useState } from "react";

const RestaurantMenu= ()=>{

    const [showIndex,setShowIndex]= useState(0);
    
    const {id}=useParams();

    const resInfo = useRestaurantMenu(id);

    if(resInfo===null) return <Shimmer />;

    const {name,cuisines,costForTwoMessage} =resInfo?.data?.cards[2]?.card?.card?.info;
    
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories= resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
        c.card?.card?.["@type"]===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

        
        return(
            <div className="text-center ">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold my-6 text-lg">{cuisines.join(" , ")} : {costForTwoMessage}</p>
            {categories.map((category,index)=>(
                            <RestaurantCategory key={category?.card?.card.title} 
                                data={category?.card?.card} showItem={index===showIndex ? true: false}
                                setShowIndex={()=>{ showIndex===index?setShowIndex(null) : setShowIndex(index)} }
                            />
                    )
                )
            }
        </div>
    );
};

export default RestaurantMenu;