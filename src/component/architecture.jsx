import { useState } from "react";
import CardArch from "./cardArch";
import NavBarSection from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "./architetureSlice";
import Footer from "./footer";

function Architecture() {
  const dispatch = useDispatch();
  const aData = useSelector((state) => state.architectures);
  const searchQuery = useSelector((state) => state.search.query);

  const [period, setPeriod] = useState("Ancient");
  const filterArch = aData.filter((arch) => arch.period === period);

  const searchedArch = filterArch.filter((arch) =>
    arch.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const darkMode = useSelector((state) => state.theme.darkMode);
  const appStyle = {
    backgroundColor: darkMode ? "rgb(58, 57, 57)" : "#fffff0",
    color: darkMode ? "white" : "black",
    transition: "all 0.3s ease",
  };

  return (
    <>
      <NavBarSection />
      <div className="slogan my-5 text-center container" style={appStyle}>
        <div></div>
        <h1 className="mb-5 main-title">Architecture of India</h1>
        <div className="timeline d-flex justify-content-center gap-5 mb-4">
          <h4
            className={period === "Ancient" ? "active-period" : ""}
            onClick={() => setPeriod("Ancient")}
            style={{ cursor: "pointer" }}
          >
            Ancient
          </h4>

          <h4
            className={period === "Medieval" ? "active-period" : ""}
            onClick={() => setPeriod("Medieval")}
            style={{ cursor: "pointer" }}
          >
            Medieval
          </h4>

          <h4
            className={period === "Modern" ? "active-period" : ""}
            onClick={() => setPeriod("Modern")}
            style={{ cursor: "pointer" }}
          >
            Modern
          </h4>
        </div>

        <div className="d-flex flex-wrap justify-content-evenly gap-5 mb-5">
          {/* {aCards} */}
          {searchedArch.map((arch) => (
            <CardArch
              key={arch.id}
              id={arch.id}
              img={arch.image}
              name={arch.name}
              description={arch.shortDescription}
              isFavorite={arch.isFavorite}
              handleLike={() => dispatch(toggleLike(arch.id))}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Architecture;
