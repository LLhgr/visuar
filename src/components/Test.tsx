import React from "react";
import Image from "next/image";
import Link from "next/link";

import QR from "../assets/QR.svg";
import boll1 from "../assets/boll1.svg";
import boll2 from "../assets/boll2.svg";
import boll3 from "../assets/boll3.svg";
import sofa from "../assets/sofa.jpeg";

import target1 from "../assets/target1.jpeg";
import target2 from "../assets/target2.jpeg";
import target3 from "../assets/target3.jpeg";

type Props = {};

export default function Test({}: Props) {
  return (
    <div className="w-full h-[1000px] flex flex-col mt-[100px] items-center justify-around">
      <span className="border-solid border border-gray-500 p-2 rounded-md max-w-fit">
        Teste você mesmo
      </span>
      <h1 className="text-4xl font-medium flex">
        Baixe o aplicativo e escaneie a foto do produto
      </h1>
      <div className="w-full flex items-center justify-center">
        <div className="w-[45%] flex-col">
          <div className="flex w-[100%] bg-[#2E2E2E] p-5 rounded-xl  mb-5">
            <Image
              src={target1}
              width={200}
              height={200}
              alt="item"
              className="rounded-md"
            />
            <div className="flex flex-col justify-between ml-5">
              <p className="text-xs text-gray-500">Móveis para casa</p>
              <h1 className="text-3xl font-semibold">Mesa simples</h1>
              <div>
                <h2 className="text-2xl">R$ 1.599,00</h2>
                <p className="text-xs uppercase">Ou em até 10x de 159,90</p>
              </div>
              <Image src={QR} width={40} height={40} alt="tenis" />
            </div>
          </div>
          <div className="flex w-[100%] bg-[#2E2E2E] p-5 rounded-xl mb-5">
            <Image
              src={target2}
              width={200}
              height={200}
              alt="item"
              className="rounded-md"
            />
            <div className="flex flex-col justify-between ml-5">
              <p className="text-xs text-gray-500">Artigos diversos</p>
              <h1 className="text-3xl font-semibold">
                Foguetinho de brinquedo
              </h1>
              <div>
                <h2 className="text-2xl">R$ 599,00</h2>
                <p className="text-xs uppercase">Ou em até 10x de 59,90</p>
              </div>
              <Image src={QR} width={40} height={40} alt="tenis" />
            </div>
          </div>
          <div className="flex w-[100%] bg-[#2E2E2E] p-5 rounded-xl mb-5">
            <Image
              src={target3}
              width={200}
              height={200}
              alt="item"
              className="rounded-md"
            />
            <div className="flex flex-col justify-between ml-5">
              <p className="text-xs text-gray-500">Móveis para casa</p>
              <h1 className="text-3xl font-semibold">Cadeira Luxury black</h1>
              <div>
                <h2 className="text-2xl">R$ 5.599,00</h2>
                <p className="text-xs uppercase">Ou em até 10x de 559,90</p>
              </div>
              <Image src={QR} width={40} height={40} alt="tenis" />
            </div>
          </div>
        </div>
        <div className="flex w-[45%] flex-col justify-start h-full ml-5">
          <div className="flex items-center mb-10">
            <Image src={boll1} width={30} height={30} alt="tenis" />
            <p className="ml-2">
              Baixe o aplicativo{" "}
              <Link className="underline" href="https://we.tl/t-r06hqvV8wT">
                clicando aqui
              </Link>
              <span className="border-b-2"></span>
            </p>
          </div>
          <div className="flex items-center my-10">
            <Image src={boll2} width={30} height={30} alt="tenis" />
            <p className="ml-2">
              Com o aplicativo aberto, escaneie a imagem do produto presente ao
              lado
            </p>
          </div>
          <div className="flex items-center mt-10">
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
