import HomeStory from "../components/HomeStory";
import MobileHero from "/pricing/mobile/hero.jpg";
import TabletHero from "/pricing/tablet/hero.jpg";
import DesktopHero from "/pricing/desktop/hero.jpg";
export default function PricingHero({ screenWidth }) {
  const HeroImg =
    screenWidth < 767
      ? MobileHero
      : screenWidth < 1024
      ? TabletHero
      : DesktopHero;

  return (
    <>
      <HomeStory
        img={HeroImg}
        backgroundColor={"black"}
        headingColor={"white"}
        bodyColor={"offWhite"}
        titleText={"Create and share your photo stories."}
        buttonText={"get an invite"}
        gridOrder={"order-2"}
        coloredBarHeight={"md:h-[307px]"}
        coloredBarClassName={
          "top-0 left-[33px] h-[6px] w-[128px]  md:w-[6px] md:h-[144px] md:left-0 md:top-[50%] md:translate-y-[-50%]"
        }
      >
        Photosnap is a platform for photographers and visual storytellers. We
        make it easy to share photos, tell stories and connect with others.
      </HomeStory>
    </>
  );
}
