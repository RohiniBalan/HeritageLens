import { useState } from "react";
import NavBarSection from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "./handicraftSlice";
import Footer from "./footer";
import CardHandi from "./cardHandi";

function Handicraft() {
  const dispatch = useDispatch();
  const hData = useSelector((state) => state.handicrafts);
  const searchQuery = useSelector(state => state.search.query);
  
  const [category, setCategory] = useState("all");

  const filterHand =
    category === "all"
      ? hData
      : hData.filter((hand) => hand.category === category);

  const searchedHand = filterHand.filter(hand =>
  hand.name.toLowerCase().includes(searchQuery.toLowerCase())
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
      <div
        className="slogan my-5 text-center container"
        style={appStyle}
      >
        <div>
          <select
            className="heading"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Textiles & Fabrics">Textlies</option>
            <option value="Pottery & Clay Crafts">Pottery</option>
            <option value="Wood & Bamboo Crafts">Wood</option>
            <option value="Metal & Stone Crafts">Metal</option>
            <option value="Folk & Tribal Crafts">Tribal</option>
          </select>
        </div>
        <h1 className="mb-5">HandiCrafts of India</h1>
        {/* <h6>"Traditions shaped by hands, skills, and heritage"</h6> */}
        
        <div className="d-flex flex-wrap justify-content-evenly gap-5 mb-5">
          {searchedHand.map((hand) => (
            <CardHandi
            key={hand.id}
              id={hand.id}
              img={hand.image}
              name={hand.name}
              description={hand.shortDescription}
              isFavorite={hand.isFavorite}
              handleLike={() => {
                dispatch(toggleLike(hand.id));
              }}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Handicraft;
