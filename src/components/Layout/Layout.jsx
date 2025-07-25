import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Toaster position="top-right" />
    </>
  );
};

export default Layout;
