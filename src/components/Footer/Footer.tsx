"use client";
import { useScroll } from "@/src/hooks/useScroll";
import { useLayoutEffect, useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
export default function Footer() {
    const { isMovingBottom } = useScroll();
    return (
        <footer
            className={`${
                isMovingBottom ? "h-0" : "h-16"
            } fixed bottom-0 transition-all bg-black w-full  rounded-tl-2xl rounded-tr-2xl`}
        >
            <div className="relative flex justify-center items-center ">
                <button className="w-14 absolute h-14 mx-auto flex items-center justify-center rounded-full bg-white">
                    <IoMdAdd size={33} color={"#000000"} />
                </button>
            </div>
        </footer>
    );
}
