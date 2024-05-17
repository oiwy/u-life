import { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <div className="container flex items-center justify-between bg-black py-5">
        <h2 className="text-2xl font-semibold leading-none text-white">
          ULife
        </h2>
        <button className="h-min text-2xl font-bold">
          <svg
            width="30"
            height="10"
            viewBox="0 0 30 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2_12)">
              <line
                y1="1.5"
                x2="30"
                y2="1.5"
                stroke="#F0F9F9"
                stroke-width="3"
              />
              <line
                y1="8.5"
                x2="30"
                y2="8.5"
                stroke="#F0F9F9"
                stroke-width="3"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_12">
                <rect width="30" height="10" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
