import NavBar from "./NavBar";
import Header from "./Header";
import Input from "./Input";
import "./Allnavbar.css";

const AllNavBar = (props) => {
  console.log(props);
  return (
    <div className="mb-3">
      <div >
        <div
          className="bgnav
text-light"
        >
          <NavBar nav={props.navBar} />
          <Header />
        </div>

        <div className=" setting">
          {" "}
          <Input />
        </div>
      </div>
    </div>
  );
};
export default AllNavBar;
