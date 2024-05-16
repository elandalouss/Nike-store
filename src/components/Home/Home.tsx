import "./Home.css"
import Header from "./subComponents/Header";
import Layer1 from "./subComponents/Layer1";
import ProductsSlid from "./subComponents/ProductsSlid";

const Home = () => {
  return (
    <div className="Home">
      <div className="HomeContainer">
        {/* <Header /> */}
        {/* <Layer1 /> */}
        <ProductsSlid />
      </div>
    </div>
  )
};

export default Home;
