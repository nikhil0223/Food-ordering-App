import ItemList from "./ItemList";

const RestaurantCategory = ({ data , showItem , setShowIndex})=>{

    const handleClick = ()=>{
        setShowIndex();
    };

    return (
        <div>
            <div className="header w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>⬇</span>
                </div>
                {showItem && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    );
};

export default RestaurantCategory;