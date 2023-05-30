import "./main.css";
const Main = (props) => {
  return (
    <div className="maintable">
      {props.city2.map((item)=>(
        <div className="posion" key={item.name}>
        <img src={item.image} />
        <div className="posidon2">
          <h3>{item.name}</h3>
          <p>{item.subText}</p>
        </div>
      </div>
      ))

      }
     
    </div>
  );
};
export default Main;
