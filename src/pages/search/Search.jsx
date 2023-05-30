import "./seach.css";
import search from "../../data/search.json";
import AllSeach from "./component/Allseach";
import AllNavBar from "../home/component/wrapper/AllNavBar";
import navBar from "../../data/navBar.json";
import footer from "../../data/footer.json";
import Footer from "../home/component/footter/footer";

const Search = () => {
  return (
    <div>
      <div
        
      >
        <AllNavBar navBar={navBar} />
      </div>
      <div>
        <AllSeach search={search} />
      </div>
      <div className="mt-4"><Footer footer={footer}/></div>
    </div>
  );
};

export default Search;
