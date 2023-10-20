export default function Feature({ img, alt, title, children }) {
  return (
    <div className="flex flex-col gap-12 max-w-[457px] m-auto">
      <img src={img} alt={alt} className="w-[72px] h-auto m-auto " />
      <div className="flex flex-col gap-4 w-full">
        <h3 className="font-bold text-custom-18 leading-25 text-center">
          {title}
        </h3>
        <p className="leading-25 text-custom-15 text-center">{children}</p>
      </div>
    </div>
  );
}
