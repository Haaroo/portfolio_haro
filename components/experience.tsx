import { dataExperience } from "@/data";
import Title from "./title";
import { BadgeCheck } from "lucide-react";
import { Progress } from "./ui/progress";

const Experience = () => {
    return (
        <div className="p-6 md:px-12 md:py-40 max-w-5xl mx-auto" id="experience">
            <Title title="Conocimientos" subtitle="Acumulados" icono="👾"/>

            <div className="grid md:grid-cols-2 gap-8 mt-5 justify-center">
                {dataExperience.map((data) => (
                    <div key={data.id} className="p-6 border border-white-10 
                        rounded-xl shadow-md shadow-slate-100 dark:bg-slate-800">
                        <h3 className="text-center text-xl">{data.title}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {data.experience.map((item) => (
                                <div key={item.name} className="my-4">
                                    <p className="flex gap-2 mb-2">
                                        <BadgeCheck />{item.name}
                                    </p>
                                    <p className="text-gray-400 mb-2">{item.subtitle}</p>
                                    <Progress value={item.value} className="w-[60%]" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Experience;