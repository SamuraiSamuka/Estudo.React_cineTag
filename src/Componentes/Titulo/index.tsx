interface TituloProps {
  children: string
}

export default function Titulo({children}: TituloProps) {
  return (
    <div className="flex justify-center items-center py-4 my-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl">{children}</h1>
    </div>
  );
}
