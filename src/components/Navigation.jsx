import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
const Navigation = () => {
  return (
    <>
      <div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">AboutMe</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/portfolio">Portfolio</Link>
        </ul>
      </div>
    </>
  );
};
export default Navigation;
