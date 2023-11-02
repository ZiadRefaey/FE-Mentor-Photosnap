export default function ColoredBar({ hidden, className }) {
  return <div className={`gradient absolute  ${hidden} ${className}`}></div>;
}
