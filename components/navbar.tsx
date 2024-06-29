import { itemsNavbar } from "@/data";
import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";

const Navbar = () => {
    return (
        <nav className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10 text-center">
            <div className="flex items-center gap-2 justify-center 
            px-4 py-1 dark:bg-white/10 bg-slate-800/10 background-blur-sm rounded-full relative inline-flex" aria-controls="mobile-menu" aria-expanded="false">
                {itemsNavbar.map((item) => (
                    <div key={item.id} className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary">
                        <Link href={item.link}>{item.icon} </Link>
                    </div>
                ))}
                <ToggleTheme/>
            </div>
        </nav>
    );
}

export default Navbar;