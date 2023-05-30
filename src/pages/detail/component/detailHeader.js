import "./detailheder.css";

const DeatailHeader = (poprs) => {
  return (
    <div className="header">
      <div>
        <h3>{poprs.details2.name}</h3>

        <p>{poprs.details2.address}</p>
        <p>
          <b className="text-primary">{poprs.details2.distance}</b>
        </p>
        <p>
          <b className="text-success">{poprs.details2.price}</b>
        </p>
      </div>
      <div>
        <button>Reserve of Book Now !</button>
      </div>
    </div>
  );
};
export default DeatailHeader;
