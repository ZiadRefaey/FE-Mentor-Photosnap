import HomeStory from "./HomeStory";
import StoryOneMobile from "/home/mobile/create-and-share.jpg";
import StoryTwoMobile from "/home/mobile/beautiful-stories.jpg";
import StoryThreeMobile from "/home/mobile/designed-for-everyone.jpg";

import StoryOneTablet from "/home/tablet/create-and-share.jpg";
import StoryTwoTablet from "/home/tablet/beautiful-stories.jpg";
import StoryThreeTablet from "/home/tablet/designed-for-everyone.jpg";

import StoryOneDesktop from "/home/desktop/create-and-share.jpg";
import StoryTwoDesktop from "/home/desktop/beautiful-stories.jpg";
import StoryThreeDesktop from "/home/desktop/designed-for-everyone.jpg";

export default function HomeStories({ screenWidth }) {
  const StoryOne =
    screenWidth < 767
      ? StoryOneMobile
      : screenWidth < 1024
      ? StoryOneTablet
      : StoryOneDesktop;

  const StoryTwo =
    screenWidth < 767
      ? StoryTwoMobile
      : screenWidth < 1024
      ? StoryTwoTablet
      : StoryTwoDesktop;

  const StoryThree =
    screenWidth < 767
      ? StoryThreeMobile
      : screenWidth < 1024
      ? StoryThreeTablet
      : StoryThreeDesktop;

  return (
    <section className="grid grid-cols-1">
      <HomeStory
        img={StoryOne}
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
      <HomeStory
        img={StoryTwo}
        backgroundColor={"white"}
        headingColor={"black"}
        bodyColor={"black"}
        titleText={"beautiful stories every time"}
        buttonText={"view the stories"}
        hidden={"hidden"}
      >
        We provide design templates to ensure your stories look terrific. Easily
        add photos, text, embed maps and media from other networks. Then share
        your story with everyone
      </HomeStory>
      <HomeStory
        img={StoryThree}
        backgroundColor={"white"}
        headingColor={"black"}
        bodyColor={"offblack"}
        titleText={"designed for everyone."}
        buttonText={"view the stories"}
        hidden={"hidden"}
        gridOrder={"order-2"}
      >
        Photosnap can help you create stories that resonate with your audience.
        Our tool is designed for photographers of all levels, brands, businesses
        you name it.
      </HomeStory>
    </section>
  );
}
