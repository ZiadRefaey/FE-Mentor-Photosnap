export default function ButtonPrimary({ children, theme, className }) {
  const colors =
    theme === "dark" ? "bg-black text-white" : "bg-white text-black";

  return (
    <button
      className={`uppercase py-3 px-6 tracking-wide text-custom-12 font-bold ${className} ${colors}`}
    >
      <p>{children}</p>
    </button>
  );
}
