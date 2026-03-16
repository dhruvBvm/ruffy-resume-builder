import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { useContext } from "react";
import { TemplateOneContext } from "../../../TemplateOne";

const TemplateLayout = () => {
  const templateContext = useContext(TemplateOneContext);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default TemplateLayout;
