import Nav from "./component/Nav";
// import resList from './utils/mockData';
import About from "./component/About";
import ErrorPage from "./component/ErrorPage";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./component/Landing";
import { Contact } from "./component/Contact";
import ResturantMenu from "./component/ResturantMenu";

function App() {
 
  return(
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/resturant/:id' element={<ResturantMenu/>}/>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <Search />

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
        {listResturants.map((resturants, id) => (
          <Body key={id} resData={resturants} />
        ))}
      </div> */}
    </div>
  );
}

export default App;
