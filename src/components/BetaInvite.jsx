import ColoredBar from "./ColoredBar";
import ButtonSecondary from "./ButtonSecondary";
export default function BetaInvite() {
  return (
    <div className="relative  bg-beta-mobile md:bg-beta-tablet bg-no-repeat bg-center xl:bg-beta-desktop bg-cover ">
      <ColoredBar
        className={
          "top-0 left-[33px] h-[6px] w-[128px] md:left-0 md:h-full md:w-[6px]"
        }
      />
      <div className="flex flex-col items-start justify-center gap-6 px-8 py-16 md:flex-row md:justify-between max-w-[1110px] m-auto">
        <h4 className="text-custom-32 font-bold text-white uppercase leading-40 tracking-widest md:text-custom-40 md:flex-row md:justify-between max-w-[380px]">
          We’re in beta. Get your invite today!
        </h4>
        <ButtonSecondary
          theme={"light"}
          className={"font-bold text-custom-12 tracking-wide md:self-center"}
        >
          GET AN INVITE
        </ButtonSecondary>
      </div>
    </div>
  );
}
