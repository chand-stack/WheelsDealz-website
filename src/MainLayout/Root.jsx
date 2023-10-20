import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";
import Footer from "../Shared/Footer";
import { useState } from "react";

const Root = () => {
  const [theme, setTheme] = useState(false);

  const themeHandler = () => {
    setTheme(!theme);
    console.log(theme);
  };
  return (
    <div className={theme ? "bg-slate-900 text-slate-400" : ""}>
      <Nav themeHandler={themeHandler} />
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Root;
