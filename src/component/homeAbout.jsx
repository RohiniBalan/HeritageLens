import Heritage from "../assets/heritage.png";

function HomeAbout(){
  return(
    <div className="home-about my-5 text-center">
    <h1>Why HeritageLens ?</h1>
      <div className="row align-items-center justify-content-evenly">
        <div className="col-lg-5 col-md-12">
        <img src={Heritage} width="450px"/>
        </div>
        <div className="col-lg-5 col-md-12">
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
