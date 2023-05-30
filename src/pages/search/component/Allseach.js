import SearchPopup from "./SearchPopup";
import SearchListItem from "./SearchListItem";



const AllSeach = (poprs) => {
  return (
    <div>
      <div className=" row ml-3 mr-3">
        <div className="col-4">
          <SearchPopup />
        </div>
        <div className="col-8">
          <SearchListItem search2={poprs.search} />
        </div>
      </div>
    </div>
  );
};
export default AllSeach;
