import classes from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <p className={classes.headerTitle}>Hi, my name is</p>
      <h1>Rafal Kunicki</h1>
      <p>
        I am a Junior Frontend Developer. I code and create beautifully simple
        things , and I love what I do.
      </p>
      <p>
        Finding The Right Junior Frontend Developer is hard, but doesn't have to
        be... you can always Click Contact Section
      </p>
    </div>
  );
};
export default Header;
