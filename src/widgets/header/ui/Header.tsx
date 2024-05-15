import { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <div className="container flex items-center justify-between px-2 py-3">
        <h2 className="text-2xl font-bold">ULife</h2>
        <button className="h-min text-2xl font-bold">=</button>
      </div>
    </header>
  );
};

export default Header;
