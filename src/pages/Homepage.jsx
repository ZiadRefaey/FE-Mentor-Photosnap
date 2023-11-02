import HomeHero from "../components/HomeHero";
import HomeStoriesCards from "../components/HomeStoriesCards";
import HomeFeatures from "../components/HomeFeatures";
export default function Homepage({ screenWidth }) {
  return (
    <>
  
      <HomeHero screenWidth={screenWidth} />
      <HomeStoriesCards screenWidth={screenWidth} />
      <HomeFeatures />
    </>
  );
}
