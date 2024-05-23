import { useState } from "react";

const User=({name , Location})=>{
    const [count]=useState(0);
    return (
        <div className="user-card">
            <h2>count1: {count}</h2>
            <h2>Name: {name}</h2>
            <h3>Location : {Location}</h3>
            <h4>Contact : dummy@gmail.com</h4>
        </div>
    );
};

export default User;