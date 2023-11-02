import check from "/pricing/desktop/check.svg";
export default function CompareELement({ AccessNo, title, screenWidth }) {
  return (
    <>
      <div className="flex flex-col mb-6 items-start gap-4 justify-start  w-full max-w-[730px] pb-6 border-offWhite  border-b-[1px] m-auto md:flex-row md:justify-between">
        <p className="xl:pl-6 font-bold text-custom-12 tracking-wide">
          {title}
        </p>

        <div className="flex items-start justify-start gap-[68px] max-w-[420px] md:justify-around md:gap-0 md:w-[420px]">
          {screenWidth < 768 && (
            <>
              {" "}
              <div className="flex flex-col items-start justify-center gap-2">
                <p className="font-bold text-custom-12 tracking-wide text-offWhit">
                  BASIC
                </p>
                {AccessNo > 2 ? <img src={check} className="w-4 h-3" /> : " "}
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="font-bold text-custom-12 tracking-wide text-offWhite">
                  PRO
                </p>
                {AccessNo > 1 ? <img src={check} className="w-4 h-3" /> : " "}
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="font-bold text-custom-12 tracking-wide text-offWhite">
                  BUSINESS
                </p>
                {AccessNo > 0 ? <img src={check} className="w-4 h-3" /> : " "}
              </div>
            </>
          )}
          {screenWidth > 767 && (
            <>
              <div className="flex flex-col items-start justify-center gap-2">
                {AccessNo > 2 ? <img src={check} className="w-4 h-3" /> : " "}
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                {AccessNo > 1 ? <img src={check} className="w-4 h-3" /> : " "}
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                {AccessNo > 0 ? <img src={check} className="w-4 h-3" /> : " "}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
