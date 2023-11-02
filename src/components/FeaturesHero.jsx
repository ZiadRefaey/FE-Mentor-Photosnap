import HomeStory from "./HomeStory";
import HeroDesktop from "/features/desktop/hero.jpg";
import HeroTablet from "/features/tablet/hero.jpg";
import HeroMobile from "/features/mobile/hero.jpg";
export default function FeaturesHero({ screenWidth }) {
  const HeroImg =
    screenWidth < 767
      ? HeroMobile
      : screenWidth < 1024
      ? HeroTablet
      : HeroDesktop;

  return (
    <>
      <HomeStory
        backgroundColor={"black"}
        headingColor={"white"}
        bodyColor={"white"}
        gridOrder={"order-2"}
        img={HeroImg}
        titleText={"Features"}
        buttonHidden={"hidden"}
        coloredBarClassName={
          "top-0 left-[33px] h-[6px] w-[128px]  md:w-[6px] md:h-[144px] md:left-0 md:top-[50%] md:translate-y-[-50%]"
        }
      >
        We make sure all of our features are designed to be loved by every
        aspiring and even professional photograpers who wanted to share their
        stories.
      </HomeStory>
    </>
  );
}
