import ContactMe from "./ContactMe";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Home from "./Home";
const Navigation = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Home />
          </li>
          <li>
            <AboutMe />
          </li>
          <li>
            <ContactMe />
          </li>
          <li>
            <Portfolio />
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navigation;
