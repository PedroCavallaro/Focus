import { IoMdAdd } from "react-icons/io";
export default function Footer() {
    return (
        <footer className="fixed bottom-0 h-16 w-full bg-black rounded-tl-2xl rounded-tr-2xl">
            <div className="relative flex justify-center items-center ">
                <button className="w-14 absolute h-14 mx-auto flex items-center justify-center rounded-full bg-white">
                    <IoMdAdd size={33} color={"#000000"} />
                </button>
            </div>
        </footer>
    );
}
