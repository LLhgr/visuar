import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../assets/visuAR.svg";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="flex w-full justify-between p-5 items-center">
      <Image src={logo} height={43} width={100} alt="logo" />
      <div>
        <Link href="#Sobre" className="pr-3">
          <button>Quem somos</button>
        </Link>
        <Link href="#Vantagens">
          <button>Vantagens</button>
        </Link>
      </div>
      <button className="bg-gradient-to-r from-[#FF42D5] to-[#2842CA]  p-2 rounded-md">
        <Link href="#Test">Teste você mesmo</Link>
      </button>
    </div>
  );
}
