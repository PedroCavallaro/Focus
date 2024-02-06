"use client";
import { CgGym } from "react-icons/cg";
import { useScroll } from "@/src/hooks/useScroll";
import { IoSearchOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { useFooter } from "@/src/hooks/useFooter";
import Link from "next/link";
import { ReactNode } from "react";

type FotterNavigationItems = {
    href: string;
    icon: ReactNode;
};

const icons: Array<FotterNavigationItems> = [
    {
        href: "/",
        icon: <CgGym key={0} size={25} />,
    },
    {
        href: "search",
        icon: <IoSearchOutline key={1} size={25} />,
    },
    {
        href: "routine",
        icon: <CiClock2 size={25} key={0} />,
    },
];

export default function Footer() {
    const { isMovingBottom } = useScroll();
    const { page, changePage } = useFooter();

    return (
        <footer
            className={`${
                isMovingBottom ? "h-0 -bottom-[0.7rem]" : "h-16"
            } fixed flex justify-between px-10 bottom-0 transition-all bg-black border-t-main backdrop-blur-lg border-white border-opacity-80 w-full   `}
        >
            {icons.map(({ href, icon }, i) => {
                return (
                    <button key={i} onClick={() => changePage(i as 0 | 1 | 2)}>
                        <Link
                            href={href}
                            className={`flex items-center relative ${
                                i === page
                                    ? "text-orange-primary"
                                    : "text-opacity-50 text-white"
                            }`}
                        >
                            {icon}
                        </Link>
                    </button>
                );
            })}
        </footer>
    );
}
