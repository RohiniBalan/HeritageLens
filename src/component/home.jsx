import CarouselSection from "./carousel";
import Category from "./category";
import Footer from "./footer";
import Highlight from "./highlight";
import NavBarSection from "./navbar";
import ArchitecturalTimeline from "./timeline";
import HomeAbout from "./homeAbout";
import Cta from "./cta":

function Home() {
  return (
    <>
      <NavBarSection />
      <CarouselSection/>
      <Category/>
      <Highlight/>
      <ArchitecturalTimeline/>
      <HomeAbout/>
      <Cta/>
      <Footer/>
    </>
  );
}

export default Home;
