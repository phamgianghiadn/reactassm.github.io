import "./SearchPopup.css";
const SearchPopup = () => {
  return (
    <div className="container bg-warning ">
      <h3 className="text-secondary pt-4">Search</h3>
      <div className="inputhead">
        <div>
          <p>Destination</p>
          <input type="text" />
        </div>
        <div>
          <p>Check-in Date</p>
          <input type="date" />
        </div>
      </div>

      <div>
        <div className="inputmain">
          <span>
            Min prince
            <span> per night</span>
          </span>
          <input type="number" />
        </div>
        <div className="inputmain">
          <span>
            Max prince
            <span> per night</span>
          </span>
          <input type="number" />
        </div>
        <div className="inputmain">
          <span>Adult</span>
          <input type="number" />
        </div>
        <div className="inputmain">
          <span>Children</span>
          <input type="number" />
        </div>
        <div className="inputmain">
          <span>Room</span>
          <input type="number" />
        </div>
      </div>
      <div>
        <button className="seachiput">Seach</button>
      </div>
    </div>
  );
};
export default SearchPopup;
