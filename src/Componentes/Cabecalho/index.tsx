import { Link } from "react-router-dom";
import logo from "./cinetag_logo.svg";
import Container from "../Container";

export default function Cabecalho() {
  return (
    <header className="py-4 bg-black">
      <Container>
        <div className="flex justify-between items-center">
          <Link to="./">
            <img src={logo} alt="Logo do cinetag"/>
          </Link>
          <nav className="text-white font-light no-underline text-base">
            <Link to="./" className="p-4">Home</Link>
            <Link to="./Favoritos" className="p-4">Favoritos</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
