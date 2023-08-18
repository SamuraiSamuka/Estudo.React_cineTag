import Container from "../Container";

export default function Rodape() {
  return (
    <footer className="bg-black text-white py-4">
      <Container>
        <div className="flex justify-center items-center">
          <h4 className="text-base font-normal">Implementado por <a className="text-blue-400" href="https://www.linkedin.com/in/samuel-silva-de-carvalho/">Samuel</a></h4>
        </div>
      </Container>
    </footer>
  );
}
