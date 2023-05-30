import "./gueses.css";
const Gueses = (props) => {
  return (
    <div>
      <h2>
        <b>Homes guests love</b>{" "}
      </h2>
      <div className="guesescolum">
        {props.hotellist2.map((item) => (
          <div key={item.name}>
            <img src={item.image_url} />
            <a href="">
              <h4>{item.name}</h4>
            </a>
            <h5>{item.city}</h5>
            <h5>
              <b>Starting From ${item.price}</b>
            </h5>
            <p>
              <b className="boderrate"> {item.rate}</b>
              {item.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gueses;
