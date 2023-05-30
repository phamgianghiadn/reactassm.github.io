import Main from "./Main";
import Browes from "./Browes";
import Gueses from "./Gueses";
import SaveTime from "./SaveTime";
const AllMain = (props) => {
  return (
    <div >
      <div className="container">
        <Main city2={props.city} />
      </div >
      <div className="container"><Browes types2={props.types}/></div>
      <div className="container"><Gueses hotellist2={props.hotellist}/></div>
      <div><SaveTime/></div>
    </div>
  );
};
export default AllMain;
