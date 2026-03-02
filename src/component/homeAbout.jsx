import Heritage from "../assets/heritage.jpg";

function HomeAbout(){
  return(
    <div className="home-about text-center">
    <h1 className="sub-title">Why HeritageLens ?</h1>
      <div className="row align-items-center justify-content-evenly">
        <div className="col-lg-4 col-md-12">
        <img src={Heritage}/>
        </div>
        <div className="col-lg-6 col-md-12">
         <p>HeritageLens is a digital platform designed to explore and 
        preserve India’s cultural heritage. It provides organized, 
        interactive, and educational content that helps users 
        understand traditions, art forms, festivals, and architecture 
        in a simple and engaging way.
         </p>
        </div>
    </div>
    </div>
  )
}

export default HomeAbout;
