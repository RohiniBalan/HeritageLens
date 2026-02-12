import CarouselSection from "./carousel";
import Category from "./category";
import Footer from "./footer";
import Highlight from "./highlight";
import NavBarSection from "./navbar";
import ArchitecturalTimeline from "./timeline";


function Home() {
  return (
    <>
      <NavBarSection />
      <CarouselSection/>
      <Category/>
      <Highlight/>
      <ArchitecturalTimeline/>
      <Footer/>
    </>
  );
}

export default Home;
