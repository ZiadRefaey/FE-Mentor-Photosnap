import BetaInvite from "../components/BetaInvite";
import FeaturesHero from "../components/FeaturesHero";
import FeaturesPageList from "../components/FeaturesPageList";

export default function Features({ screenWidth }) {
  return (
    <div>
      <FeaturesHero screenWidth={screenWidth} />
      <FeaturesPageList />
      <BetaInvite />
    </div>
  );
}
