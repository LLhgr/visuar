import React from "react";
import Image from "next/image";

import sobreNosImg from "../assets/sobreNosImg.svg";

type Props = {};

export default function Sobre({}: Props) {
  return (
    <div className="w-full h-[382px] flex">
      <div className="w-[50%] flex justify-start">
        <Image src={sobreNosImg} height={382} width={532} alt="logo" />
      </div>

      <div className=" h-full w-[50%] flex flex-col justify-around">
        <span className="border-solid border border-gray-500 p-2 rounded-md max-w-fit">
          Sobre nós
        </span>
        <h1 className="text-4xl font-medium">
          Soluções inovadoras para um{" "}
          <div className="text-cyan-300">mundo em constante mudança</div>
        </h1>

        <span className="text-base">
          Somos uma equipe apaixonada e dedicada que trabalha para fornecer
          soluções inovadoras que atendam às necessidades de nossos clientes.
          Com anos de experiência em desenvolvimento de aplicativos e
          tecnologia, estamos empenhados em fornecer a melhor experiência
          possível para nossos usuários.
        </span>
      </div>
    </div>
  );
}
