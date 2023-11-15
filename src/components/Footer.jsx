import { Link } from "react-router-dom";

// Import the social media icons

import logoLight from "/shared/desktop/logo-light.svg";
import SocialsContainer from "./SocialsContainer";
import ButtonSecondary from "./ButtonSecondary";

export default function Footer() {
  return (
    <div className="bg-black py-14 px-8 flex flex-col gap-[120px] md:flex-row md:items-center md:justify-between ">
      <div className="grid grid-cols-1 gap-8 md:self-start w-full md:gap-0 xl:grid-cols-2 xl:gap-[85px]">
        <img
          src={logoLight}
          className="max-w-[176px] m-auto md:m-0 md:mb-8 xl:mb-0"
          alt="Company's Logo"
        />
        <SocialsContainer />
        <div className="flex flex-col items-center justify-center gap-5 uppercase text-white font-bold text-custom-12 md:flex-row md:gap-[26px] md:justify-start xl:fkex-col xl:gap-5 md:order-2 md:mb-[72px] xl:mb-0 xl:row-span-2 xl:flex-col xl:items-start ">
          <Link
            className="hover:text-darkGray transition-colors duraaction-300"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-darkGray transition-colors duration-100"
            to="/stories"
          >
            stories
          </Link>
          <Link
            className="hover:text-darkGray transition-colors duration-100"
            to="/features"
          >
            features
          </Link>
          <Link
            className="hover:text-darkGray transition-colors duration-100"
            to="/pricing"
          >
            pricing
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-[34px] w-full items-center justify-center md:gap-[120px] md:justify-between md:items-end xl:gap-[86px]">
        <ButtonSecondary
          theme={"light"}
          className={`text-white font-bold text-custom-12`}
        >
          Get an invite
        </ButtonSecondary>
        <p className="text-custom-15 text-offWhite">
          Challenge done by Ziad Refaey
        </p>
      </div>
    </div>
  );
}
