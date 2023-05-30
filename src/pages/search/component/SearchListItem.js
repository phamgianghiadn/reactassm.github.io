import "./SearchListItem.css";

function buttonSearch() {
  location.assign("/detail");
}
const SearchListItem = (poprs) => {
  console.log(poprs.search2);

  return (
    <div>
      {poprs.search2.map((item) => (
        <div key={item.name}>
          <div className="row showsearch">
            <div className="col-3 imgsearch">
              <img src={item.image_url} />
            </div>
            <div className=" col-6 ">
              <h5>
                <b>{item.name}</b>
              </h5>
              <p>
                <b>{item.distance}</b>
              </p>
              <p>
                <span className="bg-success text-light">{item.tag}</span>
              </p>

              <p>
                <b>{item.description}</b>
              </p>
              <p>{item.type}</p>
              <p className="text-success">
                <b>{item.free_cancel ? ` Free cancellation ` : ""}</b>
              </p>
            </div>
            <div className="col-3 butonseach">
              <p>
                {item.rate_text}{" "}
                <span className="bg-primary text-light">{item.rate}</span>
              </p>
              <h4>${item.price}</h4>
              <p>Incudes taxes and fees</p>
              <button onClick={buttonSearch}>See availapliti</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SearchListItem;
