import "./browes.css";

const Browes = (props) => {
  return (
    <div>
      <h2>
        <b> Browse by property type </b>{" "}
      </h2>
      <div className="browes">
        {props.types2.map((item) => (
          
          <div key={item.name}>
            <img src={item.image} />
            <h4>{item.name}</h4>
            <p>{item.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Browes;
