import { Link } from "react-router-dom";
import { DiReact } from "react-icons/di";
import classes from "./Navigation.module.css";
const Navigation = () => {
  return (
    <>
      <div className={classes.navigation}>
        <span className={classes.logo}>
          <DiReact />
        </span>

        <div>
          <ul className={classes.list}>
            <Link to="/">HomeHome</Link>
            <Link to="/">HomeHome</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/portfolio">Portfolio</Link>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navigation;
