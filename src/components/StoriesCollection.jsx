import HomeStoryCard from "./HomeStoryCard";
import mountainsMobile from "/stories/mobile/mountains.jpg";
import voyageMobile from "/stories/mobile/18-days-voyage.jpg";
import cityscapesMobile from "/stories/mobile/cityscapes.jpg";
import architecturalsMobile from "/stories/mobile/architecturals.jpg";
import behindWavesMobile from "/stories/mobile/behind-the-waves.jpg";
import darkForestMobile from "/stories/mobile/dark-forest.jpg";
import kingOnAfricaMobile from "/stories/mobile/king-on-africa.jpg";
import landOfDreamsMobile from "/stories/mobile/land-of-dreams.jpg";
import milkyWayMobile from "/stories/mobile/milky-way.jpg";
import rageOfTheSeaMobile from "/stories/mobile/rage-of-the-sea.jpg";
import runningFreeMobile from "/stories/mobile/running-free.jpg";
import somwarpetMobile from "/stories/mobile/somwarpet.jpg";
import tripToNowhereMobile from "/stories/mobile/trip-to-nowhere.jpg";
import unforeseenCornersMobile from "/stories/mobile/unforeseen-corners.jpg";
import worldTourMobile from "/stories/mobile/world-tour.jpg";
import calmWatersMobile from "/stories/mobile/calm-waters.jpg";

import mountainsDesktop from "/stories/desktop/mountains.jpg";
import voyageDesktop from "/stories/desktop/18-days-voyage.jpg";
import cityscapesDesktop from "/stories/desktop/cityscapes.jpg";
import architecturalsDesktop from "/stories/desktop/architecturals.jpg";
import behindWavesDesktop from "/stories/desktop/behind-the-waves.jpg";
import darkForestDesktop from "/stories/desktop/dark-forest.jpg";
import kingOnAfricaDesktop from "/stories/desktop/king-on-africa.jpg";
import landOfDreamsDesktop from "/stories/desktop/land-of-dreams.jpg";
import milkyWayDesktop from "/stories/desktop/milky-way.jpg";
import rageOfTheSeaDesktop from "/stories/desktop/rage-of-the-sea.jpg";
import runningFreeDesktop from "/stories/desktop/running-free.jpg";
import somwarpetDesktop from "/stories/desktop/somwarpet.jpg";
import tripToNowhereDesktop from "/stories/desktop/trip-to-nowhere.jpg";
import unforeseenCornersDesktop from "/stories/desktop/unforeseen-corners.jpg";
import worldTourDesktop from "/stories/desktop/world-tour.jpg";
import calmWatersDesktop from "/stories/desktop/calm-waters.jpg";

export default function StoriesCollection({ screenWidth }) {
  const voyage = screenWidth < 767 ? voyageMobile : voyageDesktop;
  const mountains = screenWidth < 767 ? mountainsMobile : mountainsDesktop;
  const cityscapes = screenWidth < 767 ? cityscapesMobile : cityscapesDesktop;
  const architecturals =
    screenWidth < 767 ? architecturalsMobile : architecturalsDesktop;

  const behindWaves =
    screenWidth < 767 ? behindWavesMobile : behindWavesDesktop;
  const darkForest = screenWidth < 767 ? darkForestMobile : darkForestDesktop;
  const kingOnAfrica =
    screenWidth < 767 ? kingOnAfricaMobile : kingOnAfricaDesktop;
  const landOfDreams =
    screenWidth < 767 ? landOfDreamsMobile : landOfDreamsDesktop;
  const milkyWay = screenWidth < 767 ? milkyWayMobile : milkyWayDesktop;
  const rageOfTheSea =
    screenWidth < 767 ? rageOfTheSeaMobile : rageOfTheSeaDesktop;
  const runningFree =
    screenWidth < 767 ? runningFreeMobile : runningFreeDesktop;
  const somwarpet = screenWidth < 767 ? somwarpetMobile : somwarpetDesktop;
  const tripToNowhere =
    screenWidth < 767 ? tripToNowhereMobile : tripToNowhereDesktop;
  const unforeseenCorners =
    screenWidth < 767 ? unforeseenCornersMobile : unforeseenCornersDesktop;
  const worldTour = screenWidth < 767 ? worldTourMobile : worldTourDesktop;
  const calmWaters = screenWidth < 767 ? calmWatersMobile : calmWatersDesktop;
  const StoriesCards = [
    {
      img: mountains,
      title: "The Mountains",
      tagline: "John Applessed",
      date: "April 16th 2020",
    },
    {
      img: cityscapes,
      title: "Sunset CityScapes",
      tagline: "by Benhamin Cruz",
      date: "April 14th 2020",
    },
    {
      img: voyage,
      title: "18 Days Voyage",
      tagline: "by Alexei Brodin",
      date: "April 11th 2020",
    },
    {
      img: architecturals,
      title: "Architecturals",
      tagline: "by Samantha Broke",
      date: "April 9th 2020",
    },
    {
      img: worldTour,
      title: "World Tour 2019",
      tagline: "by Timothy Wagner",
      date: "April 7th 2020",
    },
    {
      img: unforeseenCorners,
      title: "Unforeseen Corners",
      tagline: "by William Malcolm",
      date: "April 3rd 2020",
    },
    {
      img: kingOnAfrica,
      title: "King on Africa: Part II",
      tagline: "by Tim Hillenburg",
      date: "March 29th 2020",
    },
    {
      img: tripToNowhere,
      title: "The Trip to Nowhere",
      tagline: "by Felicia Rourke",
      date: "March 21st 2020",
    },

    {
      img: rageOfTheSea,
      title: "Rage of The Sea",
      tagline: "by Mohammed Abdul",
      date: "March 19th 2020",
    },
    {
      img: runningFree,
      title: "Running Free",
      tagline: "by Michelle",
      date: "March 16th 2020",
    },
    {
      img: behindWaves,
      title: "Behind the Waves",
      tagline: "by Lamarr Wilson",
      date: "March 11th 2020",
    },
    {
      img: calmWaters,
      title: "Calm Waters",
      tagline: "by Samantha Brooke",
      date: "March 9th 2020",
    },
    {
      img: milkyWay,
      title: "The Milky Way",
      tagline: "by Benjamin Cruz",
      date: "March 5th 2020",
    },
    {
      img: darkForest,
      title: "Night at The Dark Forest",
      tagline: "by  Mohammed Abdul",
      date: "March 4th 2020",
    },
    {
      img: somwarpet,
      title: "Somwarpet’s Beauty",
      tagline: "by Michelle",
      date: "March 1st 2020",
    },
    {
      img: landOfDreams,
      title: "Land of Dreams",
      tagline: "by William Malcolm",
      date: "February 25th 2020",
    },
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {StoriesCards.map((story, index) => (
        <HomeStoryCard
          key={index}
          img={story.img}
          tagline={story.tagline}
          title={story.title}
          date={story.date}
        />
      ))}
    </section>
  );
}
