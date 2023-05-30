import "./deatilmain.css"
const DetailMain = (poprs) => {
  return (
    <div className="row">
      <div className="col-8">
        <h4>
          <b>{poprs.details2.title}</b>
        </h4>
        <p>{poprs.details2.description}</p>
      </div>
      <div className="col-4 boderseach">
        <h6>
          {" "}
          <b className="text-muted">Peferct for a 9-night stay</b>
        </h6>
        <p>Located a 5-minute walk from St. Florian's Gate in Krakow</p>
        <div><h4><b>${poprs.details2.nine_night_price}</b>(9 Night)</h4></div>
        <button>Reserve of Book Now !</button>
      </div>
    </div>
  );
};
export default DetailMain;
