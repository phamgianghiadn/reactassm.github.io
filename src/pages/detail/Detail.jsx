import AllNavBar from "../home/component/wrapper/AllNavBar";
import navBar from "../../data/navBar.json";
import footer from "../../data/footer.json";
import Footer from "../home/component/footter/footer";
import details from "../../data/detail.json";
import Details from "./component/detail";

const Detail = () => {
  return (
    <div>
      <div
      
      >
        <AllNavBar navBar={navBar} />
      </div>
      <div className="container">
        <Details details={details} />
      </div>
      <div className="mt-4">
        <Footer footer={footer} />
      </div>
    </div>
  );
};

export default Detail;
