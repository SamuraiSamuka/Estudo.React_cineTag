import { Outlet } from "react-router-dom";
import Cabecalho from "./Componentes/Cabecalho";
import Rodape from "./Componentes/Rodape";

function Root() {
  return (
    <>
      <Cabecalho></Cabecalho>
      <Outlet />
      <Rodape></Rodape>
    </>
  );
}

export default Root;
