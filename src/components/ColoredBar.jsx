export default function ColoredBar({ hidden, className }) {
  return <div className={`gradient absolute ${className} ${hidden}`}></div>;
}
