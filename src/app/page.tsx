import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Vantagens from "@/components/Vantagens";
import Test from "@/components/Test";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#212121] flex justify-center">
      <div className="w-[80vw]">
        <Header />
        <Hero />
        <section id="Sobre">
          <Sobre />
        </section>
        <section id="Vantagens">
          <Vantagens />
        </section>
        <section id="Test">
          <Test />
        </section>
      </div>
    </main>
  );
}
