"use client"
import Link from "next/link"
import { socialNetworks } from "@/data"
import Image from 'next/image'
import ContainerPage from "./container"

const Header = () => {
    return(
            <div className="absolute z-40 inline-block w-full top-5 md:top-10 px-20">
                <header>
                    <div className="container justify-between max-w-6xl mx-auto md:flex">
                        <Link href="/">
                            <Image src="/haro5.png" priority width="100" height="100" alt="Avatar" className="iteams-center justify-center md:flex mx-auto hover:text-cyan-600 cursor-pointer px-3 py-2 transition-all duration:300"/> <br/>
                        </Link>
                        <div className="text-secondary flex iteams-center justify-center gap-7">
                            {socialNetworks.map(({logo,src,id}) => (
                                <Link key={id}
                                href={src}
                                target="_white"
                                className="transition-all duration:300 text-green-600 hover:text-cyan-600">
                                {logo}
                                </Link>
                            ))}                    
                        </div>
                    </div>
                </header>
            </div>
    )
}

export default Header;