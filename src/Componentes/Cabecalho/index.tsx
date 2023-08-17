import { Link } from "react-router-dom";
import logo from "./cinetag_logo.svg";

export default function Cabecalho() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-black">
      <Link to="./">
        <img src={logo} alt="Logo do cinetag"/>
      </Link>
      <nav className="text-white font-light no-underline text-base">
        <Link to="./" className="p-4">Home</Link>
        <Link to="./Favoritos" className="p-4">Favoritos</Link>
      </nav>
    </header>
  );
}
