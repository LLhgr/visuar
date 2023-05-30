"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";

import phone from "../assets/phone.svg";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "fature mais",
      "aumente o LTV",
      "diminua devoluções",
      "aumente a confiança",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="p-5 flex w-full h-[800px] items-center">
      <div className="flex flex-col justify-start items-start w-[50%]">
        <h1 className="text-5xl font-semibold h-[100px]">
          <span className="">
            A experiência que irá fazer com que a sua empresa{" "}
          </span>
          <span className="text-[#FF42D5]">{text}</span>
          <Cursor cursorColor="#FF42D5"></Cursor>
        </h1>
        <span className="my-20">
          Transforme seus produtos em uma experiência emocionante e envolvente
          para seus clientes, com o nosso aplicativo de realidade aumentada.
          Escaneie qualquer produto e visualize-o em 3D e em tamanho real em seu
          ambiente. Experimente a sensação de ter produtos antes mesmo de
          comprá-los e reduza as devoluções. Aumente a confiança do cliente e as
          taxas de conversão com a experiência de compra do futuro. Baixe agora
          e experimente por si mesmo!
        </span>
        <button className="bg-gradient-to-r from-[#FF42D5] to-[#2842CA]  p-2 rounded-md">
          <Link href="https://wa.me/5511972848304?text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es">
            Entre em contato
          </Link>
        </button>
      </div>
      <div className="w-[50%] flex justify-center">
        <Image src={phone} height={300} width={300} alt="phone" />
      </div>
    </div>
  );
}
