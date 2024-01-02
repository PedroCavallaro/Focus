import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import muscleIcon from "../../../public/muscleIcon.svg";
import Image from "next/image";
import { useModal } from "@/src/context/ModalContext";

export default function FooterButton() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleClick = () => {
        setIsMenuOpen((prev) => !prev);
    };
    const { openWorkoutModal } = useModal();

    return (
        <div className="relative flex justify-center items-center ">
            <button
                onClick={handleClick}
                className={`${
                    isMenuOpen ? "rotate-45" : "rotate-0"
                } w-14 absolute h-14 mx-auto flex items-center justify-center rounded-full bg-white transition-all z-10`}
            >
                <IoMdAdd size={33} color={"#000000"} />
            </button>

            <button
                className={`w-14  ${
                    isMenuOpen ? "-top-[100px] ml-[100px]" : " -top-6 ml-0"
                }  absolute h-14 mx-auto flex items-center justify-center rounded-full bg-black transition-all `}
            >
                <CiClock2 size={33} color={"#FFFFFF"} />
            </button>
            <button
                onClick={() => {
                    openWorkoutModal();
                    handleClick();
                }}
                className={`w-14  ${
                    isMenuOpen ? "-top-[100px] mr-[100px]" : " -top-6 mr-0"
                }  absolute h-14 mx-auto flex items-center justify-center rounded-full bg-black transition-all`}
            >
                <Image
                    src={muscleIcon}
                    alt="made by Darius Dan https://www.flaticon.com/authors/darius-dan"
                    width={40}
                    height={43}
                />
            </button>
        </div>
    );
}
