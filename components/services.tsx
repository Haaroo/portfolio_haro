import { dataServices } from "@/data";
import Title from "./title";
import { Check } from "lucide-react";

const Services = () => {
    return (
        <div className="p-6 md:px-12 md:py-40 max-w-5xl mx-auto" id="services">
            <Title title="Competencias" subtitle="Ofrecidas" icono="✨"/>

            <div className="grid md:grid-cols-3 gap-5 mt-7">
                {dataServices.map((service) => (
                    <div key={service.id}
                        className="p-6 border border-white-10 
                        rounded-xl shadow-md shadow-slate-100 dark:bg-slate-800 h-fit"
                    >
                        <h4 className="mb-4 text-xl flex gap-2">
                            {service.icon}
                            {service.title}
                        </h4>
                        <ul>
                            {service.features.map((feature, index) => (
                                <li key={index} className="flex gap-3 mb-3">
                                    <Check size={20} />
                                    {feature.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;