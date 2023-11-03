import StoriesCollection from "../components/StoriesCollection";
import StoriesHero from "../components/StoriesHero";
export default function Stories({ screenWidth }) {
  return (
    <div>
      <StoriesHero screenWidth={screenWidth} />
      <StoriesCollection />
    </div>
  );
}
