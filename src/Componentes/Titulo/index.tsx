interface TituloProps {
  children: string
}

export default function Titulo({children}: TituloProps) {
  return (
    <h1 className="flex justify-center items-center">{children}</h1>
  );
}
