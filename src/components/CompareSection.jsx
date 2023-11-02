import CompareTable from "./CompareTable";

export default function CompareSection({ screenWidth }) {
  return (
    <>
      <h5 className="font-bold text-custom-40 leading-40 tracking-widest w-full text-center mt-20 mb-14">
        COMPARE
      </h5>
      <CompareTable screenWidth={screenWidth} />
    </>
  );
}
