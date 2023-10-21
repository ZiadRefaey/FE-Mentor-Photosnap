export default function ColoredBar({ hidden, className }) {
  return (
    <div
      className={`gradient absolute top-0 left-[33px] h-[6px] w-[128px] md:h-[304px] md:w-[6px] md:top-[173px] md:left-0 ${className} ${hidden}`}
    ></div>
  );
}
