import classes from "./Header.module.css";
import { CiFaceSmile } from "react-icons/ci";
const Header = () => {
  return (
    <div className={classes.headerwrapper}>
      <p className={classes.headerTitle}>Hi, my name is</p>
      <h1 className={classes.headerName}>Rafal Kunicki</h1>
      <p className={classes.text}>
        I am a Junior Frontend Developer. I code and create beautifully simple
        things, and I love what I do.
      </p>
      <p className={classes.textSecond}>
        Finding The Right Junior Frontend Developer is hard, but doesn't have to
        be... you can always Click Contact Section
        <span className={classes.icon}>
          <CiFaceSmile />
        </span>
      </p>
    </div>
  );
};
export default Header;
