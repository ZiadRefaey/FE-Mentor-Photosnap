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
      >
        We make sure all of our features are designed to be loved by every
        aspiring and even professional photograpers who wanted to share their
        stories.
      </HomeStory>
    </>
  );
}
