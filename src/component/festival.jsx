import NavBarSection from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toggleLike } from "./festivalSlice";
import Footer from "./footer";
import CardFestival from "./cardFestival";

function Festival() {
  const dispatch = useDispatch()
  const fData = useSelector((state) => state.festivals);
  const searchQuery = useSelector(state => state.search.query);
  
  const [category, setCategory] = useState('all')
  const filterFes = category === 'all'? fData: fData.filter(fes=> fes.category === category)
  
const searchedFes = filterFes.filter(fes =>
  fes.name.toLowerCase().includes(searchQuery.toLowerCase())
);
  
  const darkMode = useSelector((state) => state.theme.darkMode)
  const appStyle = {
    backgroundColor: darkMode? 'black': '#fffff0',
    color: darkMode? 'white': 'black',
    transition:'all 0.3s ease'
  };

  return (
    <>
      <NavBarSection/>
      <div className="container slogan my-5 text-center " style={appStyle}>
        <div>
            <select className="heading" onChange={e=> setCategory(e.target.value)}>
              <option value="all">All</option>
              <option value="Harvest Festival">Harvest</option>
              <option value="ReligiousFestival">Religious</option>
              <option value="Cultural Festival">Cultural</option>
              <option value="Fair">Fair</option>
            </select>
          </div>
          <h1 className="mb-5">Festivals of India</h1>
          {/* <h6>"Celebrating the spirit, culture and unity"</h6> */}
          
          <div className="d-flex flex-wrap justify-content-evenly gap-5 mb-5">
            {searchedFes.map(fes=>(
              <CardFestival key={fes.id} id={fes.id} img={fes.image} name={fes.name} description={fes.shortDescription} 
              isFavorite={fes.isFavorite} handleLike={()=> dispatch(toggleLike(fes.id))} />
            ))}
          </div>
      
      </div>
      <Footer/>
    </>
  );
}
export default Festival;
