interface ContainerProps {
  children: any
}

export default function Container({children}: ContainerProps) {
  return (
    <section className=" my-8 mx-80 text-center">
      {children}
    </section>
  );
}
