import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <div className="dark:bg-black bg">
      <Header />
     
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
