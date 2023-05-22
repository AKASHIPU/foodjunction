import React from "react";
import { CDN_LINK } from "../utils/constants";


const Body=(props)=>{

   let {resData}=props;
   const{name,locality,avgRating,cuisines}=resData?.data;
    return (
        <div>
            <div className="container-main">
            <div className="container">
                <img className='container-item'alt='resturant images'src={CDN_LINK + resData.data.cloudinaryImageId}></img>
                      <h4>{name}</h4>
                      <h6 className="cuisines-item">{cuisines}</h6>
                    <h5>{locality}</h5>
                       <h4 className="rating">Rating: {avgRating} star</h4>
                    
            </div>
            </div>
        </div>
    )
}
export default Body;