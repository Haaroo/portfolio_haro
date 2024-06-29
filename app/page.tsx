import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Header/>
      <Introduction/>
    </main>
  );
}
