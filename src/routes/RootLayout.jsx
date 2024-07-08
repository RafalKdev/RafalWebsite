import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <Navigation />

      <Outlet />
    </>
  );
};
export default RootLayout;
