import { Link } from "react-router-dom";
import logo from "/shared/desktop/logo.svg";
import menu from "/shared/mobile/menu.svg";
import close from "/shared/mobile/close.svg";
import ButtonPrimary from "./ButtonPrimary";
import { useState } from "react";
export default function MobileNav() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="px-6 py-7 md:px-10 bg-white w-full relative">
      <div
        className={`w-full p-8 bg-white absolute top-[72px] left-0 flex flex-col gap-8 z-50 items-center justify-center ${
          isActive ? "flex" : "hidden"
        }`}
      >
        <Link
          to="/stories"
          className="font-bold text-custom-15 tracking-wide  relative"
        >
          STORIES
        </Link>
        <Link
          to="/features"
          className="font-bold text-custom-15 tracking-wide  relative"
        >
          FEATURES
        </Link>
        <Link
          to="/pricing"
          className="font-bold text-custom-15 tracking-wide  relative"
        >
          PRICING
        </Link>
        <div className="w-full h-[1px] bg-offWhite  relative"></div>
        <ButtonPrimary theme={"dark"} className={"w-full  relative"}>
          GET AN INVITE
        </ButtonPrimary>
      </div>
      <ul className="flex items-center justify-between w-full m-auto max-w-[690px] relative">
        <li>
          <Link
            to="/"
            className="w-[170px] h-auto object-contain cursor-pointer  relative"
          >
            <img src={logo} alt="" className="w-full h-full" />
          </Link>
        </li>

        <li>
          <div className="w-5 h-auto object-contain cursor-pointer  relative">
            <img
              src={isActive ? close : menu}
              alt=""
              onClick={() => setIsActive(!isActive)}
              className="w-full h-full"
            />
          </div>
        </li>
      </ul>
    </nav>
  );
}
