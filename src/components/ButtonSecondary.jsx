import arrowLight from "/shared/desktop/arrow-light.svg";
import arrowDark from "/shared/desktop/arrow-dark.svg";
export default function ButtonSecondary({ children, className, theme }) {
  return (
    <button
      className={`uppercase flex  gap-4 items-start justify-start btn-sec ${className} `}
    >
      <p
        className="btn-sec-text"
        style={{ color: theme === "light" ? "white" : "black" }}
      >
        {children}
      </p>
      <div className="self-center">
        {theme === "light" ? (
          <img src={arrowLight} alt="" />
        ) : (
          <img src={arrowDark} alt="" />
        )}
      </div>
    </button>
  );
}
