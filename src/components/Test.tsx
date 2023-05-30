import React from "react";
import Image from "next/image";
import Link from "next/link";

import tenis from "../assets/tenis.svg";
import QR from "../assets/QR.svg";
import boll1 from "../assets/boll1.svg";
import boll2 from "../assets/boll2.svg";
import boll3 from "../assets/boll3.svg";
import sofa from "../assets/sofa.jpeg";

type Props = {};

export default function Test({}: Props) {
  return (
    <div className="w-full h-[500px] flex flex-col mt-[100px] items-center justify-around">
      <span className="border-solid border border-gray-500 p-2 rounded-md max-w-fit">
        Teste você mesmo
      </span>
      <h1 className="text-4xl font-medium flex">
        Baixe o aplicativo e escaneie a foto do produto
      </h1>
      <div className="w-full flex items-center justify-center">
        <div className="flex w-[45%] bg-[#2E2E2E] p-5 rounded-xl">
          <Image
            src={sofa}
            width={200}
            height={200}
            alt="item"
            className="rounded-md"
          />
          <div className="flex flex-col justify-between ml-5">
            <p className="text-xs text-gray-500">Móveis para casa</p>
            <h1 className="text-3xl font-semibold">Sofá Luxury red</h1>
            <div>
              <h2 className="text-2xl">R$ 5.599,00</h2>
              <p className="text-xs uppercase">Ou em até 10x de 559,90</p>
            </div>
            <Image src={QR} width={40} height={40} alt="tenis" />
          </div>
        </div>
        <div className="flex w-[45%] flex-col justify-between h-full ml-5">
          <div className="flex items-center">
            <Image src={boll1} width={30} height={30} alt="tenis" />
            <p className="ml-2">
              Baixe o aplicativo{" "}
              <Link className="underline" href="https://we.tl/t-r06hqvV8wT">
                clicando aqui
              </Link>
              <span className="border-b-2"></span>
            </p>
          </div>
          <div className="flex items-center">
            <Image src={boll2} width={30} height={30} alt="tenis" />
            <p className="ml-2">
              Com o aplicativo aberto, escaneie a imagem do produto presente ao
              lado
            </p>
          </div>
          <div className="flex items-center ">
            <Image src={boll3} width={30} height={30} alt="tenis" />
            <p className="ml-2">
              Após mirar na imagem, espere ela renderizar o produto em seu
              celular
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
