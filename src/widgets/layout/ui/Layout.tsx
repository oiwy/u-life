import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header } from "@/widgets";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
