import HomeStoryCard from "./HomeStoryCard";

import mountainsMobile from "/stories/mobile/mountains.jpg";
import voyageMobile from "/stories/mobile/18-days-voyage.jpg";
import cityscapesMobile from "/stories/mobile/cityscapes.jpg";
import architecturalsMobile from "/stories/mobile/architecturals.jpg";

import mountainsDesktop from "/stories/desktop/mountains.jpg";
import voyageDesktop from "/stories/desktop/18-days-voyage.jpg";
import cityscapesDesktop from "/stories/desktop/cityscapes.jpg";
import architecturalsDesktop from "/stories/desktop/architecturals.jpg";

export default function HomeStoriesCards({ screenWidth }) {
  const voyage = screenWidth < 767 ? voyageMobile : voyageDesktop;

  const mountains = screenWidth < 767 ? mountainsMobile : mountainsDesktop;

  const cityscapes = screenWidth < 767 ? cityscapesMobile : cityscapesDesktop;

  const architecturals =
    screenWidth < 767 ? architecturalsMobile : architecturalsDesktop;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      <HomeStoryCard
        img={mountains}
        title={"The Mountains"}
        tagline={"John Applessed"}
      />
      <HomeStoryCard
        img={cityscapes}
        title={"Sunset Cityscapes"}
        tagline={"by Benjamin Cruz"}
      />
      <HomeStoryCard
        img={voyage}
        title={"18 Days Voyage"}
        tagline={"by Alexei Borodin"}
      />
      <HomeStoryCard
        img={architecturals}
        title={"Architecturals"}
        tagline={"by Samantha Brooke"}
      />
    </section>
  );
}
