import { dataContact } from "@/data";
import Title from "./title";
import Link from "next/link";
import ContactForm from "./contact-form";

const Contact = () => {
    return (
        <div className="p-6 md:px-12 md:py-40 max-w-5xl mx-auto text-center" id="contact">
            <Title title="Contacta conmigo" subtitle="Pongamonos en contacto " icono="📬" />

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
                <div>
                    {dataContact.map((data) => (
                        <div key={data.id}
                            className="border border-white-10 
                        rounded-xl shadow-md shadow-slate-100 dark:bg-slate-800 text-center flex flex-col items-center dark:bg-slate-800 rounded-lg mb-5 p-4 border-2 border-boulder/50"
                        >
                            {data.icon}
                            <p>{data.title}</p>
                            <p>{data.subtitle}</p>
                            <Link href={data.link} target="_blank">
                                Enviar mensaje
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="col-span-2">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;