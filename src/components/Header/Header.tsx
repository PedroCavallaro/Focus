"use client";
import { RiMenu2Line } from "react-icons/ri";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
import { CgGym } from "react-icons/cg";
import { useState } from "react";
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <header
            className={`p-4  flex flex-col ${
                isOpen ? "h-[124px]" : "h-[80px]"
            } gap-4 bg-black rounded-bl-2xl rounded-br-2xl overflow-hidden transition-all`}
        >
            <nav className="w-full flex justify-between items-center">
                <button
                    onClick={handleClick}
                    className={`${
                        isOpen ? "rotate-90" : "rotate-0"
                    } transition-all`}
                >
                    <GoChevronRight size={29} />
                </button>
                <CgGym size={30} />
                <div className="rounded-full w-12 h-12 bg-white"></div>
            </nav>
            <div className="flex justify-center items-center gap-5 text-lg">
                <p className="underline">Treino</p>
                <p className="text-zinc-500">Rotina</p>
            </div>
        </header>
    );
}
