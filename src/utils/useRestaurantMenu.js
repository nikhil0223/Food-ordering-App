import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (id)=>{

    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchdata();
    },[]);
    const fetchdata=async ()=>{
        const data= await fetch(MENU_API+id);
        const json= await data.json();
        setResInfo(json);
    }
    return resInfo;
};

export default useRestaurantMenu;