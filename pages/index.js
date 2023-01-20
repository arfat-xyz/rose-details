import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container mx-auto dark:text-white mt-8 grid md:grid-cols-3 gap-4 justify-center">
        <Card
          image={"/rose-card.jpg"}
          heading={"Rose"}
          desc={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita iste tempore quo sapiente soluta laboriosam saepe aperiam explicabo nemo aliquam?"
          }
          btnLink={"/rose"}
        />
        <Card
          image={"/sun-flower-card.jpg"}
          heading={"Sun flower"}
          desc={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita iste tempore quo sapiente soluta laboriosam saepe aperiam explicabo nemo aliquam?"
          }
          btnLink={"/sun-flower"}
        />
        <Card
          image={"/Hydrangea-card.jpg"}
          heading={"Hydrangea"}
          desc={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita iste tempore quo sapiente soluta laboriosam saepe aperiam explicabo nemo aliquam?"
          }
          btnLink={"/hydrangea"}
        />
      </div>
    </>
  );
}
