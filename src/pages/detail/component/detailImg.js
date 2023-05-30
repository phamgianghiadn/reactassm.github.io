import "./detailImg.css";
const DetailImg = (poprs) => {
  return (
    <div className="detailimg">
      {poprs.details2.photos.map((item) => (
        <div key={Math.random()}>
          <img src={item} />
        </div>
      ))}
    </div>
  );
};
export default DetailImg;
