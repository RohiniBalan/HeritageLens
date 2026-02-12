import { useState } from "react";
import CardArch from "./cardArch";
import NavBarSection from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "./architetureSlice";
import Footer from "./footer";

function Architecture() {
  const dispatch = useDispatch();
  const aData = useSelector((state) => state.architectures);
  const searchQuery = useSelector(state => state.search.query);
  

  // const aCards = aData.map(arch => (
  //     <CardSection
  //     key={arch.id} img={arch.image} name={arch.name} description={arch.description}
  //     />
  // ))

  const [category, setCategory] = useState("all");
  const filterArch =
    category === "all"
      ? aData
      : aData.filter((arch) => arch.period === category);

  
const searchedArch = filterArch.filter(arch =>
  arch.name.toLowerCase().includes(searchQuery.toLowerCase())
);
  
  const darkMode = useSelector((state) => state.theme.darkMode);
  const appStyle = {
    backgroundColor: darkMode ? "black" : "#fffff0",
    color: darkMode ? "white" : "black",
    transition: "all 0.3s ease",
  };

  return (
    <>
      <NavBarSection />
      <div className="slogan my-5 text-center container" style={appStyle}>
        <div>
          <select
            className="heading"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Ancient">Ancient</option>
            <option value="Medieval">Medieval</option>
            <option value="Modern">Modern</option>
          </select>
        </div>
        <h1 className="mb-5">Architecture of India</h1>
{/*         
        <h6>"Structures that narrate India’s journey through time"</h6> */}
        
        <div className="d-flex flex-wrap justify-content-evenly gap-5 mb-5">
          {/* {aCards} */}
          {searchedArch.map((arch) => (
            <CardArch
            key={arch.id}
              id={arch.id}
              img={arch.image}
              name={arch.name}
              description={arch.description}
              isFavorite={arch.isFavorite}
              handleLike={() => dispatch(toggleLike(arch.id))}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Architecture;
