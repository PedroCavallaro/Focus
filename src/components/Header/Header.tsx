"use client";
import { RxHamburgerMenu } from "react-icons/rx";
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
            className={`px-2 py-4 flex flex-col   "h-[80px]"
             gap-4 bg-black border-b-main border-white border-opacity-70 overflow-hidden transition-all`}
        >
            <nav className="w-full flex justify-between items-center">
                <button
                    onClick={handleClick}
                    className={` transition-all text-orange-primary`}
                >
                    <RxHamburgerMenu size={35} />
                </button>
                <CgGym size={30} />
                {isAuth ? (
                    <div className="rounded-full w-12 h-12 bg-white"></div>
                ) : (
                    <Link
                        href="/auth/login"
                        className="text-black px-2 bg-orange-primary rounded-full py-2 text-sm"
                    >
                        Login
                    </Link>
                )}
            </nav>
        </header>
    );
}
