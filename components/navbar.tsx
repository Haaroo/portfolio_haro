import { itemsNavbar } from "@/data";
import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const Navbar = () => {
    return (
        <nav className="fixed z-20 flex flex-col items-center justify-center w-full mt-auto h-max bottom-20">
            <div className="flex items-center gap-1 justify-center 
            px-4 py-1 dark:bg-white/10 bg-slate-800/10 background-blur-sm rounded-full relative inline-flex" aria-controls="mobile-menu" aria-expanded="false">
                {itemsNavbar.map((item) => (
                    <div key={item.id}>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-sky-900">
                                    <Link href={item.link}>
                                        {item.icon} 
                                    </Link> 
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                {item.title}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;