import { Link } from "react-router-dom";
import logo from "/shared/desktop/logo.svg";
import menu from "/shared/mobile/menu.svg";
export default function MobileNav() {
  return (
    <nav className="px-6 py-7 md:px-10 bg-white w-full">
      <ul className="flex items-center justify-between w-full m-auto max-w-[690px]">
        <li className="">
          <Link
            to="/"
            className="w-[170px] h-auto object-contain cursor-pointer"
          >
            <img src={logo} alt="" className="w-full h-full" />
          </Link>
        </li>

        <li className="">
          <div className="w-5 h-auto object-contain cursor-pointer">
            <img src={menu} alt="" className="w-full h-full" />
          </div>
        </li>
      </ul>
    </nav>
  );
}
