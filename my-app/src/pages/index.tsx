import Image from "next/image";
import { Inter } from "next/font/google";
import { PopUpContext } from "./context/PopupContext";
import { Header } from "./components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>hello react</h1>
      <PopUpContext>
        <Header />
      </PopUpContext>
    </main>
  );
}
