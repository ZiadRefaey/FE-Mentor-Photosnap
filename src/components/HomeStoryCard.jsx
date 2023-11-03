import ButtonSecondary from "./ButtonSecondary";

export default function HomeStoryCard({ img, title, tagline, date }) {
  return (
    <div className="w-full h-auto min-h-[375px] md:min-h-[500px] object-contain relative">
      <img src={img} alt={`${title} Image`} className="w-full h-full " />
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%] m-auto w-[82.6%] text-white z-10">
        <p className="text-custom-13 mb-1">{date}</p>
        <h2 className="text-custom-18 font-bold mb-1 leading-25  text-white">
          {title}
        </h2>
        <p className="text-custom-13 mb-4">{tagline}</p>
        <div className="w-full h-[1px] bg-white opacity-50 mb-5"></div>
        <ButtonSecondary theme={"light"} className={"w-full justify-between"}>
          Read story
        </ButtonSecondary>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 "></div>
    </div>
  );
}
