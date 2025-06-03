import logo from "../Assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header" className="text-3xl font-bold underline">
      <img src={logo} alt="Logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
