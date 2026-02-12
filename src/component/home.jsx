import CarouselSection from "./carousel";
import Category from "./category";
import Footer from "./footer";
import Highlight from "./highlight";
import NavBarSection from "./navbar";
import ArchitecturalTimeline from "./timeline";
import HomeAbout from "./homeAbout";


function Home() {
  return (
    <>
      <NavBarSection />
      <CarouselSection/>
      <Category/>
      <Highlight/>
      <ArchitecturalTimeline/>
      <HomeAbout/>
      <Footer/>
    </>
  );
}

export default Home;
