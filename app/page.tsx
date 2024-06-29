import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import Header from "@/components/header";
import Image from "next/image";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Header/>
      <Introduction/>
      <AboutMe/>
      <Experience/>
    </main>
  );
}
