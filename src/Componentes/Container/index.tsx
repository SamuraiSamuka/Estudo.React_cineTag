import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode
}

export default function Container({children}: ContainerProps) {
  return (
    <section className="mx-8 lg:mx-32 2xl:mx-42 3xl:mx-[500px] text-center">
      {children}
    </section>
  );
}
