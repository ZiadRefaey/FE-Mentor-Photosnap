import ButtonPrimary from "./ButtonPrimary";
import ColoredBar from "./ColoredBar";

export default function PricingPlan({ bgColor, title, children, price }) {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center px-[22px] text-center pb-10 pt-14 bg-blue relative ${
          bgColor === "black" ? "pt-[88px] pb-[71px]" : ""
        } `}
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex flex-col items-center gap-10 justify-center md:justify-between md:flex-row  md:items-start xl:flex-col xl:gap-10 ">
          <div className="flex flex-col items-center justify-center gap-[18px] max-w-[270px] md:items-start md:text-start xl:text-center xl:items-center xl:">
            <h4
              style={{ color: bgColor === "black" ? "white" : "black" }}
              className="text-custom-24 font-bold"
            >
              {title}
            </h4>
            <p
              style={{ color: bgColor === "black" ? "#999999" : "#626262" }}
              className=" text-custom-15"
            >
              {children}
            </p>
          </div>
          <div className="flex flex-col items-center justify-content md:items-end w-[278px] xl:items-center">
            <p
              style={{ color: bgColor === "black" ? "white" : "black" }}
              className="font-bold text-custom-40 tracking-widest leading-40"
            >
              ${price}
            </p>
            <p
              style={{ color: bgColor === "black" ? "#999999" : "black" }}
              className=" text-custom-15 mb-10"
            >
              per month
            </p>
          </div>
        </div>
        <ButtonPrimary
          theme={bgColor === "black" ? "light" : "dark"}
          className={" w-[245px] md:w-[270px] md:self-start xl:self-center"}
        >
          PICK PLAN
        </ButtonPrimary>
        {bgColor === "black" && (
          <ColoredBar
            className={
              "w-full top-0 left-0 h-[6px] md:w-[6px] md:left-0 md:h-full xl:w-full xl:h-[6px] xl:top-0 translate-x-0"
            }
          />
        )}
      </div>
    </>
  );
}
