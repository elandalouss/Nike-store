import "./Home.css"
import BestSelled from "./subComponents/BestSelled";
import Footer from "./subComponents/Footer";
import Header from "./subComponents/Header";
import Layer1 from "./subComponents/Layer1";

const Home = () => {
  return (
    <div className="Home">
      <div className="HomeContainer">
        <Header />
        <Layer1 />
        <BestSelled />
        <Footer />
      </div>
    </div>
  )
};

export default Home;
