import { dataPortfolio } from "@/data";
import Title from "./title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Portfolio = () => {
    return (
        <div className="p-4 max-w-4xl md:py-40 mx-auto" id="portfolio">
            <Title title="Portfolio" subtitle="Trabajos recientes" icono="💼" />
            <div className="grid md:grid-cols-3 gap-14 mt-4">
                {dataPortfolio.map((data) => (
                    <div key={data.id} className="border border-white-10 
                        rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800 text-center">
                        <h3 className="text-xl mb-4 text-center">{data.title}</h3>
                        <Image
                            src={data.image}
                            alt="Image"
                            width={300} height={300} className="rounded-2xl w-full py-3"
                        />
                        <h3 className="flex justify-center items-center space-x-4 sm:space-x-8 text-blue-600 hover:text-blue-600 transform hover:scale-110 transition duration-300 dark:hover:text-slate-50 dark:text-slate-50">{data.devIcon1}{data.devIcon2}{data.devIcon3}</h3>
                        <div className="mt-5 flex gap-5 justify-center py-2">
                            <Link
                                className={buttonVariants()}
                                href={data.urlGithub}
                                target="_blank"
                            >
                                Github
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;