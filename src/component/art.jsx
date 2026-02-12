import NavBarSection from "./navbar";
import { useDispatch, useSelector } from "react-redux"
import CardSection from "./card";
import { useState } from "react";
import { toggleLike } from "./artSlice";
import Footer from "./footer";

function Art(){
    const dispatch = useDispatch()
    let artData = useSelector(state => state.arts);

    const [category, setCategory] = useState('all')
    const filterArt = category === 'all' ? artData : artData.filter(art => art.category === category)

    const darkMode = useSelector((state)=> state.theme.darkMode)
    const appStyle = {
    backgroundColor: darkMode? 'black': '#fffff0',
    color: darkMode? 'white': 'black',
    transition:'all 0.3s ease'
  };


    return(
        <>
      <NavBarSection />
      <div className="container slogan my-5 text-center "style={appStyle} >
        <div>
          <select className="heading" onChange={e=> setCategory(e.target.value)}>
            <option value="all">All</option>
            <option value="Dance">Dance</option>
            <option value="Painting">Painting</option>
            <option value="Music">Music</option>
            <option value="Theatre">Theatre</option>
            <option value="Tribal Art">Tribal Art</option>
            <option value="Cultural Practice">Cultural</option>
            <option value="Storytelling">Story</option>
            <option value="Textile Art">Textile Art</option>
          </select>
        </div>
        <h1 className="mb-5">Art & Culture of India</h1>
        {/* <h6>
          "Expressions of tradition, creativity, and timeless stories"
        </h6> */}
        
        <div className="d-flex flex-wrap justify-content-evenly gap-5 mb-5">
             {filterArt.map(art => (
              <CardSection key={art.id} id={art.id} img={art.image} name={art.name} description={art.shortDescription} 
              isFavorite={art.isFavorite} handleLike={()=>dispatch(toggleLike(art.id))} />
             ))}
          </div>
      
      </div>
      <Footer/>
    </>
    )
}

export default Art