import "./input.css";
import Calenda from "./calenda";

const Input = () => {
  function BtnSeach() {
    location.assign("/search");
  }
  return (
    <div className=" container inputfull">
      <div className="inputmains row ">
        <div className="col-4">
          <input />
        </div>
        <div className="col-4">
          <Calenda />
        </div>
        <div className="col-4">
          <input />
        </div>
      </div>

      <div>
        <button onClick={BtnSeach}>Search</button>
      </div>
    </div>
  );
};
export default Input;
