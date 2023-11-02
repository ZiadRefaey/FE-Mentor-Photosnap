import BetaInvite from "../components/BetaInvite";
import CompareSection from "../components/CompareSection";
import PlansGroup from "../components/PlansGroup";
import PricingHero from "../components/PricingHero";
export default function Pricing({ screenWidth }) {
  return (
    <>
      <PricingHero screenWidth={screenWidth} />
      <PlansGroup />
      <CompareSection screenWidth={screenWidth} />
      <BetaInvite />
    </>
  );
}
