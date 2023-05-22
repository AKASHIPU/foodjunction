// import { FETCH_ALL_RESTAURANTS } from "../constants";

export const idIndexPair = {
    326637: 0,
    607728: 1,
    121603: 2,
    syr121603: 3,
    syt121603: 4,
    sg121603: 5,
    sf121603: 6,
    se121603: 7,
    swq121603: 8,
    sw121603: 9,
    sssss121603: 10,
    sss121603: 11,
    ssss121603: 12,
    ss121603: 13,
    s121603: 14,
};
export function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

// export async function getRestaurants(
//   setAllRestaurants,
//   setFilteredRestaurants
// ) {
//   try {
//     // const data = await fetch("http://localhost:4001/");
//     const data = await fetch(FETCH_ALL_RESTAURANTS);
//     const json = await data.json();
//     setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
//     setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
//     const mockData = await json?.data?.cards[2]?.data?.data?.cards;
//     console.log(mockData);
//     return mockData;
//   } catch (err) {
//     console.log(err);
//   }
// }

export function getMenuFromResID(
  resId,
  ARRAY_OF_MENU_OF_RESTAURANTS,
  idIndexPair
) {
  if (idIndexPair.hasOwnProperty(resId)) {
//     const id = idIndexPair[resId];// resid =121603
// const menuItems= ARRAY_OF_MENU_OF_RESTAURANTS[id];
// return menuItems.data;
    return ARRAY_OF_MENU_OF_RESTAURANTS[idIndexPair[resId]].data;
  } else {
    return null;
  }
}
