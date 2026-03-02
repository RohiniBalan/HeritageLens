import { Routes, Route } from "react-router-dom";
import Festival from "./component/festival";
import Art from "./component/art";
import Architecture from "./component/architecture";
import Home from "./component/home";
import Handicraft from "./component/handicrafts";
import About from "./component/about";
import { useSelector } from "react-redux";
import ArtDetail from "./component/artDetail";
import ArchitectureDetail from "./component/architectureDetail";
import FestivalDetail from "./component/festivalDetail";
import HandicraftDetail from "./component/handicraftDetail";
import Contact from "./component/contact";

function App() {
    const darkMode = useSelector((state=> state.theme.darkMode))
  const appStyle = {
    backgroundColor: darkMode? 'rgb(58, 57, 57)': 'white',
    color: darkMode? 'white': 'black',
    transition:'all 0.3s ease'

  };
  return (
    
    <div style={appStyle}>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art-culture" element={<Art />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/handicraft" element={<Handicraft />} />
        <Route path="/about" element={<About />} />
        <Route path="/art-culture/:id" element={<ArtDetail/>} />
        <Route path="/architecture/:id" element={<ArchitectureDetail/>} />
        <Route path="/festival/:id" element={<FestivalDetail/>} />
        <Route path="/handicraft/:id" element={<HandicraftDetail/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes> 
     
    </div>
  );
}

export default App;
