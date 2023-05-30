import React from "react";
import Image from "next/image";

import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";

type Props = {};

export default function Vantagens({}: Props) {
  return (
    <div className="w-full h-[500px] flex flex-col mt-[100px] items-center justify-around">
      <span className="border-solid border border-gray-500 p-2 rounded-md max-w-fit">
        Vantagens
      </span>
      <h1 className="text-4xl font-medium flex">
        Faça seu negócio{" "}
        <div className="text-cyan-300 ml-2"> alcançar o próximo nível</div>
      </h1>
      <div className="w-full flex justify-between">
        <div className="w-[300px] flex flex-col items-center justify-between text-center">
          <Image src={icon1} width={50} height={50} alt="icon" />
          <h3 className="my-5 font-semibold text-xl">
            Teste antes mesmo de chegar
          </h3>
          <span className="text-sm">
            Clientes podem visualizar produtos em 3D e em tamanho real em seu
            ambiente, tornando a experiência de compra mais interativa e
            emocionante.
          </span>
        </div>
        <div className="w-[300px] flex flex-col items-center justify-between text-center">
          <Image src={icon2} width={50} height={50} alt="icon" />
          <h3 className="my-5 font-semibold text-xl">
            Aumente taxas de conversão
          </h3>
          <span className="text-sm">
            Capacidade de visualizar produtos em sua configuração real aumenta a
            confiança do cliente na compra, resultando em taxas de conversão
            mais altas.
          </span>
        </div>
        <div className="w-[300px] flex flex-col items-center justify-between text-center">
          <Image src={icon3} width={50} height={50} alt="icon" />
          <h3 className="my-5 font-semibold text-xl">Redução de devoluções</h3>
          <span className="text-sm">
            Melhor compreensão do tamanho e da aparência do produto, o que reduz
            a probabilidade de devoluções de produtos indesejados ou
            incompatíveis.
          </span>
        </div>
      </div>
    </div>
  );
}
