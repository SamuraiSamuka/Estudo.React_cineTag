import favorite from "./favorite.svg";
import favoriteFill from "./favorite_FILL.svg";

interface CardProps {
  id: number
  capa: string
  titulo: string
  link: string
}

export default function Card({capa, titulo}: CardProps) {
  return (
    <div className="mt-2 w-72 bg-gray-400 flex flex-col justify-between">
      <img src={capa} alt={titulo} className="w-full " />
      <div className="p-3 grid justify-between gap-4">
        <h2 className="text-lg font-bold">{titulo}</h2>
        <img src={favorite} alt="Botão de favoritar" className="w-7" />
      </div>
    </div>
  );
}
