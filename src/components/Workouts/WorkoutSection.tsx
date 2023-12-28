import { ReactNode } from "react";

export default function WorkoutSection({ children }: { children: ReactNode }) {
    return (
        <main className=" w-full rounded-tl-lg rounded-tr-lg  px-2">
            <div className="flex justify-between py-5">
                <p className="text-lg font-bold">Treino de Hoje</p>
                <button className="text-zinc-500">Mostrar todos</button>
            </div>
            {children}
        </main>
    );
}
