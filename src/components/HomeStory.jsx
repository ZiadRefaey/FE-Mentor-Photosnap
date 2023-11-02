import ButtonSecondary from "./ButtonSecondary";
import ColoredBar from "./ColoredBar";

export default function HomeStory({
  hidden,
  buttonHidden,
  img,
  backgroundColor,
  gridOrder,
  headingColor,
  bodyColor,
  titleText,
  buttonText,
  children,
  coloredBarClassName,
}) {
  return (
    <>
      <div className={`w-full md:flex`}>
        <div
          className={`w-full h-auto bg-contain md:${gridOrder} md:w-[35.5%] max-h-[350px] md:max-h-[650px] lg:min-w-[57.6%]`}
        >
          <img src={img} alt="Background image" className="h-full w-full" />
        </div>
        <div
          className={`py-[72px] px-8 bg-${backgroundColor} relative w-full items-center justify-center md:w-[64.5%] lg:min-w-[42.4%]`}
        >
          <ColoredBar hidden={hidden} className={`${coloredBarClassName}`} />
          <div className="max-w-[387px] flex flex-col gap-6 h-full items-start justify-center m-auto">
            <h1
              className={`text-start text-${headingColor} text-custom-32 leading-10 tracking-widest font-bold uppercase md:text-custom-40`}
            >
              {titleText}
            </h1>
            <p className={`text-${bodyColor} text-custom-15 leading-25`}>
              {children}
            </p>
            <ButtonSecondary
              className={`text-${headingColor} text-custom-12 tracking-wider btn-sec font-bold ${buttonHidden}`}
              theme={bodyColor === "offWhite" ? "light" : "dark"}
            >
              {buttonText}
            </ButtonSecondary>
          </div>
        </div>
      </div>
    </>
  );
}
