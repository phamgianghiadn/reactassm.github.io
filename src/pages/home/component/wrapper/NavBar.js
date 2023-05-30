import "./NavBar.css";

const NavBar = (props) => {
  console.log(props);
  props.nav.forEach((item) => {
    if (item.active) {
      item.icon = `${item.icon} boder icon`;
    } else {
      item.icon = `${item.icon} icon`;
    }
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h2>BooKing Website</h2>
        </div>
        <div className="col-4  ">
          <button className="btn-nav m-2">Register</button>
          <button className="btn-nav m-2"> Login</button>
        </div>
      </div>
      <div className="nav-2">
        <div className={props.nav[0].icon}>
          <a href="">{props.nav[0].type}</a>
        </div>
        <div className={props.nav[1].icon}>
          <a href="">{props.nav[1].type}</a>
        </div>
        <div className={props.nav[2].icon}>
          <a href="">{props.nav[2].type}</a>
        </div>
        <div className={props.nav[3].icon}>
          <a href="">{props.nav[3].type}</a>
        </div>
        <div className={props.nav[4].icon}>
          <a href="">{props.nav[4].type}</a>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
