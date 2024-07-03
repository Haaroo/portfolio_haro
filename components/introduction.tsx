"use client"

import Image from 'next/image'
import {TypeAnimation} from 'react-type-animation';
import { Mail, Paperclip } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import ContainerPage from "@/components/container";

const Introduction = () => {
    return(
        <ContainerPage>
                <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 items-center">
                    <div className="flex flex-col justify-center max-w-md mx-auto items-center h-sreen text-center m-4 p-4">
                        <h1 className="mb-5 text-2xl leading-tight md:text-center md:text-4xl md:mb-10 mx-auto">
                        <br/>
                            Tengo experiencia diversa en: <br/>
                            <TypeAnimation
                                sequence={[
                                    "Desarrollo Front-end",
                                    2000,
                                    "Diseño UX/UI",
                                    2000,
                                    "Manual Tester QA",
                                    2000
                                ]}
                                    wrapper='span'
                                    speed={30}
                                    repeat={Infinity}
                                    className="Font-bold text-transparent bg-clip-text bg-gradient-to-r to-cyan-400 from-indigo-600"
                                    />
                        </h1>
                        <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                            Soy Emmanuel Haro, ingeniero en computación con especialización en desarrollo front-end. Además, cuento con certificación en diseño UX/UI y poseo sólidos conocimientos en pruebas manuales y QA
                        </p>
                        <div className="flex items-center">
                            <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                                <Link className= {buttonVariants()} href="#contact">
                                    <Mail className="mr-2" /> Contacta conmigo
                                </Link>
                                <Link className={buttonVariants({ variant: 'secondary' })}
                                    href="/cv-haro.pdf"
                                    target="_blank">
                                    <Paperclip className="mr-2" /> Descargar CV
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </ContainerPage>
    );
}

export default Introduction;