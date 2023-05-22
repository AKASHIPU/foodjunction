// import React,{useEffect,useState} from "react";
import {useParams} from 'react-router-dom';
// import {CDN_LINK, NO_IMAGE_AVAILABLE} from '../utils/constants';
import Shimmer from "./Shimmer";
import { getMenuFromResID, idIndexPair } from "../utils/helper";
import { ARRAY_OF_MENU_OF_RESTAURANTS } from "../mocks/mockData";

const ResturantMenu=()=>{
const param=useParams();
const {id}=param;
const test = getMenuFromResID(id,ARRAY_OF_MENU_OF_RESTAURANTS,idIndexPair);
// console.log("ARRAY_OF_MENU_OF_RESTAURANTS",ARRAY_OF_MENU_OF_RESTAURANTS);

console.log("test",id);

// useEffect(()=>{
// // let api="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6197475&lng=77.29618289999999&page_type=DESKTOP_WEB_LISTING"
//     async function getResturanData(){
//         const data= await fetch(api)
//         const json= await data.json();
//         console.log('json data is',json)
//         console.log(json?.data?.cards[2]?.data?.data?.cards[1]?.data);
//         setResturantMenu(json?.data?.cards[2]?.data?.data?.cards[1]?.data)
//     }
//     getResturanData();
// },[])
// const[resturantMenu,setResturantMenu]=useState([]);

return (

    <div>
        <h1>helloii {test?.name} </h1>
        <h2>hiii {test?.area}, {test?.city}</h2>


    </div>
//     <div>
//     <h1>Resturant Id :{id}</h1>
//     <h3>Resturant Name: {resturantMenu?.name}</h3>
//     <h2>Resturant id: {resturantMenu?.id}</h2>
//     <img alt="resturant pho" src={CDN_LINK+resturantMenu?.cloudinaryImageId}></img>
//     <h4>Area: {resturantMenu?.area}</h4>
//     <h6>Rating: {resturantMenu?.avgRating}</h6>
//     <h5>Cuisines: {resturantMenu?.cuisines}</h5>
//     <h5>Cost for 2 : ₹{resturantMenu?.costForTwo/100}</h5>
//     </div>
 )
}
export default ResturantMenu;




















    
// return !test ? (
//     <Shimmer />
//   ) : (
//     <>
//       <div className=" flex  p-16 space-x-6 justify-center mt-24 bg-gray-900 text-gray-100">
//         <img
//           className="w-96 rounded-md"
//           src={CDN_LINK + test?.cloudinaryImageId}
//         />
//         <div className="justify-center space-y-1">
//           <h1 className="text-4xl font-semibold ">{test?.name} </h1>
//           <h3 className="text-2xl">
//          {test?.area}, {test?.city}
//           </h3>
//           <h3 className="text-2xl">🌟 {test?.avgRatingString} stars</h3>
//           <h3 className="text-2xl">🍲 {test?.costForTwoMsg}</h3>
//         </div>
//       </div>

//       <div className=" flex flex-col space-y-2 justify-center items-center">
//         <div>
//           {Object.values(test?.menu?.items).map((item) => (
//             <div
//               key={item.name}
//               data-testid="menu"
//               className="flex  p-4 m-4 space-x-5 max-w-xl  rounded-lg justify-between "
//             >
//               <div className="flex space-x-3">
//                 <img
//                   src={
//                     !item.cloudinaryImageId
//                       ? NO_IMAGE_AVAILABLE
//                       : CDN_LINK + item.cloudinaryImageId
//                   }
//                   className="w-48 rounded-md "
//                 />
//                 <div className="flex flex-col">
//                   <h1 className="font-semibold text-xl">{item.name}</h1>
//                   <p className="font-normal">₹ {item.price / 100}</p>
//                 </div>
//               </div>

//               <button
               
//                 className="bg-green-700 h-10 p-2 px-3 text-white rounded-md mr-0 hover:bg-green-600 "
//               >
//                 Add
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );







///////////////////////////////////////////////////////////




  