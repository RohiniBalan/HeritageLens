import Heritage from "../assets/heritage.png";

function HomeAbout(){
  return(
    <div className="home-about">
    <h1 className="text-center">Why HeritageLens ?</h1>
      <div className="row align-items-center justify-content-evenly">
        <div className="col-lg-5 col-md-12">
         <p>HeritageLens is a digital platform designed to explore and 
        preserve India’s cultural heritage. It provides organized, 
        interactive, and educational content that helps users 
        understand traditions, art forms, festivals, and architecture 
        in a simple and engaging way.
         </p>
        </div>
        <div>
        <img src={Heritage} />
        </div>
    </div>
    </div>
  )
}

export default HomeAbout;
