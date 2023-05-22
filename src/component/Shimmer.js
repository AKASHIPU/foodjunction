import React from "react";
import './style.css';
const Shimmer=()=>{


    return(
        <div className="container-main">
            {
                console.log("hello")
            }
            {Array(15).fill('').map((data,id)=>{return <div key={id} className="shimmer-container"></div>
})}

        </div>
    )
}
export default Shimmer;