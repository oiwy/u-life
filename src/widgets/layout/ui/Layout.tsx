import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header } from "@/widgets";

const Layout: FC = () => {
  return (
    <div className="flex flex-col justify-between gap-6">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
