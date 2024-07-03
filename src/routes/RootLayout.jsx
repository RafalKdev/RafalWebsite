import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Outlet />
    </>
  );
};
export default RootLayout;
