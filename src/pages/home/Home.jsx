import "./Home.css";

import navBar from "../../data/navBar.json";
import AllNavBar from "./component/wrapper/AllNavBar";
import city from "../../data/city.json";
import AllMain from "./component/main/Allmain";
import types from "../../data/type.json";
import hotellist from "../../data/hotel_list.json";
import footer from "../../data/footer.json";
import Footer from "./component/footter/footer";
const Home = () => {
  return (
    <div className="container-fuild">
      <div
        
      >
        <AllNavBar navBar={navBar} />
      </div>

      <div>
        <AllMain city={city} types={types} hotellist={hotellist} />
      </div>
      <div>
        <Footer footer={footer} />
      </div>
    </div>
  );
};

export default Home;
