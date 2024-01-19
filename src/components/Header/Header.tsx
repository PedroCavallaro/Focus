"use client";
import { RiMenu2Line } from "react-icons/ri";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
import { CgGym } from "react-icons/cg";
import { useState } from "react";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import Link from "next/link";

export default function Header({
    isAuth,
}: {
    isAuth: RequestCookie | undefined;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <header
            className={`px-2 py-4 flex flex-col ${
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
                {isAuth ? (
                    <div className="rounded-full w-12 h-12 bg-white"></div>
                ) : (
                    <Link
                        href="/auth/login"
                        className="text-black px-2 bg-white rounded-full py-2 text-sm"
                    >
                        Login
                    </Link>
                )}
            </nav>
            <div className="flex justify-center items-center gap-5 mt-[0.35rem] text-lg">
                <p className="underline">Treino</p>
                <p className="text-zinc-500">Rotina</p>
            </div>
        </header>
    );
}
