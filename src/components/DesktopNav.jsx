import { Link } from "react-router-dom";
import logo from "/shared/desktop/logo.svg";
import ButtonPrimary from "./ButtonPrimary";
export default function DesktopNav() {
  return (
    <nav className="py-4 px-10 w-full ">
      <ul className="max-w-[1086px] flex items-center justify-between m-auto">
        <li>
          <Link to="/" className="w-[170px]">
            <img src={logo} alt="Photosnap logo" />
          </Link>
        </li>
        <div className="flex items-center justify-between w-[269px]">
          <li>
            <Link
              className="uppercase text-custom-12 font-bold tracking-wide hover:text-mediumGray transition-colors duration-100"
              to="/stories"
            >
              stories
            </Link>
          </li>
          <li>
            <Link
              className="uppercase text-custom-12 font-bold tracking-wide hover:text-mediumGray transition-colors duration-100"
              to="/features"
            >
              features
            </Link>
          </li>
          <li>
            <Link
              className="uppercase text-custom-12 font-bold tracking-wide hover:text-mediumGray transition-colors duration-100"
              to="/pricing"
            >
              pricing
            </Link>
          </li>
        </div>
        <li>
          <ButtonPrimary theme={"dark"}>get an invite</ButtonPrimary>
        </li>
      </ul>
    </nav>
  );
}
