import ButtonSecondary from "./ButtonSecondary";
import HomeStory from "./HomeStory";
import HeroImg from "/stories/mobile/moon-of-appalacia.jpg";

export default function StoriesHero({ screenWidth }) {
  return (
    <>
      {screenWidth < 768 && (
        <HomeStory
          img={HeroImg}
          backgroundColor={"black"}
          headingColor={"white"}
          bodyColor={"offWhite"}
          titleText={"Create and share your photo stories."}
          buttonText={"get an invite"}
          gridOrder={"order-2"}
          coloredBarClassName={
            "top-0 left-[33px] h-[6px] w-[128px]  md:w-[6px] md:h-[307px] md:left-0   md:top-[50%] md:translate-y-[-50%] "
          }
        >
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </HomeStory>
      )}
      {screenWidth > 767 && (
        <main className="bg-story-tablet xl:bg-story-desktop bg-cover bg-center bg-no-repeat w-full h-[650px]">
          <div className="m-auto h-full w-[90%] flex flex-col items-start justify-center gap-6">
            <p className=" font-bold text-custom-12 tracking-wide text-white">
              LAST MONTH’S FEATURED STORY
            </p>
            <h2 className="tracking-widest leading-40 font-bold text-custom-40 max-w-[307px] text-white">
              HAZY FULL MOON OF APPALACHIA
            </h2>
            <p className="text-custom-13 text-white">
              <span className="text-offWhite">March 2nd 2020</span>
              &nbsp;by John Appleseed
            </p>
            <p className="text-custom-15 leading-25 text-start max-w-[387px] text-offWhite">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called &#34;mountains,&#34;
              especially in eastern Kentucky and West Virginia, and while the
              ridges are not high, the terrain is extremely rugged.
            </p>
            <ButtonSecondary theme={"light"}>READ THE STORY</ButtonSecondary>
          </div>
        </main>
      )}
    </>
  );
}
