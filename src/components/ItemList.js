import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({items})=>{

    const dispatch=useDispatch();
    const addHandlerFunc = (item) =>{
        dispatch(addItem(item));
    }

    return (
        <div>
            <ul>
                {items.map((item)=>(
                    <div key={item.card.info.id} className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">
                            <div className="w-9/12 py-2 font-bold text-xs">
                                <span >{item.card.info.name}</span>
                                <span> - Rs.{item.card.info.price || item.card.info.defaultPrice}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className="absolute">
                                <button className="p-2 mx-9 bg-black text-white shadow-lg rounded-lg" onClick={()=>addHandlerFunc(item)}>Add+</button>
                            </div>
                            <img src={CDN_URL+item.card.info.imageId} className="w-full"></img>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;