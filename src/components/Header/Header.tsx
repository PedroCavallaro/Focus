import { RiMenu2Line } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
export default function Header() {
    return (
        <header className="p-4 h-fit flex flex-col  gap-4 bg-black rounded-bl-2xl rounded-br-2xl">
            <nav className="w-full flex justify-between items-center">
                <RiMenu2Line size={30} />
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
