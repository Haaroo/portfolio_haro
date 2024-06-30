import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import Header from "@/components/header";
import Image from "next/image";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Services from "@/components/services";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Header/>
      <Introduction/>
      <AboutMe/>
      <Experience/>
      <Services/>
      <Contact/>
      <Footer/>
    </main>
  );
}
