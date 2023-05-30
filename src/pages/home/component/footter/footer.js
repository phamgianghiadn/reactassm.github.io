import "./footer.css";
const Footer = (props) => {
  return (
    <div className="container footer">
      {props.footer.map((item) => (
        <div  key={item.col_number}>
          <div >
            <div >{
              item.col_values.map((ite)=>(
                <div  key={Math.random()}><a href="" >{ite}</a></div>
              ))
              }</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Footer;
