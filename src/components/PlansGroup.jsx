import PricingPlan from "./PricingPlan";

export default function PlansGroup() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 px-[30px] xl:flex-row xl:gap-[30px] py-12">
        <PricingPlan bgColor={"#F5F5F5"} title={"Basic"} price={"19.00"}>
          Includes basic usage of our platform. Recommended for new and aspiring
          photographers.
        </PricingPlan>
        <PricingPlan bgColor={"black"} title={"Pro"} price={"39.00"}>
          More advanced features available. Recommended for photography veterans
          and professionals.
        </PricingPlan>
        <PricingPlan bgColor={"#F5F5F5"} title={"Business"} price={"99.00"}>
          Additional features available such as more detailed metrics.
          Recommended for business owners.
        </PricingPlan>
      </div>
    </>
  );
}
