import Banner from "../../Componentes/Banner";
import Card from "../../Componentes/Card";
import Titulo from "../../Componentes/Titulo";
import videos from "../../json/db.json";

export default function Inicio() {
  return (
    <>
      <Banner imagem="Home" />
      <Titulo>Um lugar para guardar seu vídeos e filmes!</Titulo>
      <section className="flex justify-evenly flex-wrap">
        {videos.map(video => <Card {...video}  key={video.id} />)}
      </section>
    </>
  );
}