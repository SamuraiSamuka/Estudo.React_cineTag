interface BannerProps {
  imagem: string
}

export default function Banner({imagem}: BannerProps) {
  return (
    <div
      className="w-full h-32 bg-cover sm:h-48 md:h-60 xl:h-80 "
      style={{backgroundImage: `url('/imagens/Banner ${imagem}.png')`}}
    ></div>
  );
}
