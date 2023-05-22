import { useEffect, useState } from "react";
import Body from "./Body";
import Search from "./Search";
import Shimmer from "./Shimmer";
import{Link} from 'react-router-dom';

export const Landing = () => {
  const [listResturants, setListResturants] = useState([]);
  useEffect(() => {
    let Api =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6197475&lng=77.29618289999999&page_type=DESKTOP_WEB_LISTING";
    async function resApi() {
      let data = await fetch(Api);
      let json = await data.json();
      console.log(json);
      setListResturants(json?.data?.cards[2]?.data?.data?.cards);
      // console.log(json.data.cards[2].data.data)
    }
    resApi();
  }, []);
  return (
    <>
      {listResturants.length ===0 ?
      <Shimmer />
      :
      <>
      <Search />
      <button
        className="filter-btn"
        onClick={() => {
          let filteredResturants = listResturants.filter((res) => {
            return res.data.avgRating > 4;
          });
          setListResturants(filteredResturants);
        }}
      >
        Filter Top Resturants
      </button>
      
      <div className="container-items">
        {listResturants.map((resturants) => (
 <Link to={'/resturant/'+resturants?.data?.id}  key={resturants?.data?.id}><Body resData={resturants} /> </Link>

        ))}

      </div>
      </>
}
    </>
  );
};
