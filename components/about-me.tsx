import { Phone } from "lucide-react";

import { dataAboutMe, dataSlider } from "@/data";

import Title from "./title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
            <Title title="Sobre mi" subtitle="Conóceme" />
            <div className="grid md:grid-cols-1">
                <div className="py-12 md:py-0 flex items-center justify-center">
                    {/* CAROUSEL */}
                    {/* 
                    <Carousel
                        opts={{
                            align: "start"
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent className="-mt-1 h-[400px]">
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center object-contain">
                                        <Image
                                            src={data.url}
                                            alt="Image"
                                            width={250} height={300}
                                            className="w-full h-auto rounded-lg object-contain" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    */}
                </div>
                <div className="iteams-center text-center">
                    <div className="grid md:grid-cols-3 mt-7 gap-4 text-center">
                        {dataAboutMe.map((data) => (
                            <div key={data.id} className="border border-white-10 
                        rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800 text-center">
                                <p className="flex iteams-center text-center justify-center">{data.icon}</p>
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="my-8 md:text-center"> Soy un profesional con experiencia destacada en desarrollo front-end y diseño UX/UI. 
                        Mi carrera se ha centrado en crear interfaces atractivas y funcionales para aplicaciones web, combinando diseño intuitivo 
                        con sólidos conocimientos técnicos. Además, poseo habilidades avanzadas en pruebas QA manual, asegurando la calidad del 
                        software y mejorando continuamente la experiencia del usuario. Mi enfoque integrado entre desarrollo, diseño y calidad me 
                        permite ofrecer soluciones completas y eficientes en el ciclo de vida de desarrollo de aplicaciones.
                        </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;