"use client";
import { useScroll } from "@/src/hooks/useScroll";
import FooterButton from "./FooterButton";

export default function Footer() {
    const { isMovingBottom } = useScroll();
    return (
        <footer
            className={`${
                isMovingBottom ? "h-0" : "h-16"
            } fixed bottom-0 transition-all bg-black w-full  rounded-tl-2xl rounded-tr-2xl`}
        >
            <FooterButton />
        </footer>
    );
}
