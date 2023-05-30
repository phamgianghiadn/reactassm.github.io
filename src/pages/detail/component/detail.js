import DeatailHeader from "./detailHeader";
import DetailImg from "./detailImg";
import DetailMain from "./detailMain";
const Details = (poprs) => {
  return (
    <div>
      <div>
        <DeatailHeader details2={poprs.details} />
      </div>
      <div>
        <DetailImg details2={poprs.details} />
      </div>
      <div><DetailMain details2={poprs.details}/></div>
    </div>
  );
};
export default Details;
