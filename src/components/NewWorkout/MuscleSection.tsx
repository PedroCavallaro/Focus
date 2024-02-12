import { ReactNode } from "react";
import { CiLogout } from "react-icons/ci";
interface MuscleSection {
    children: ReactNode;
    isMuscleSelected: boolean;
    handleClick: (muscleId: number) => void;
    handleSaveWorkout: () => void;
}

export default function MuscleSection({
    children,
    isMuscleSelected,
    handleClick,
    handleSaveWorkout,
}: MuscleSection) {
    return (
        <section className="flex flex-col gap-5">
            {!isMuscleSelected ? (
                <h2 className="text-xl font-light">Músculo</h2>
            ) : (
                <div className="flex justify-between">
                    <button
                        className="flex gap-2 justify-start items-center"
                        onClick={() => handleClick(-1)}
                    >
                        <CiLogout size={20} />
                        <p className="text-xl font-light">Voltar</p>
                    </button>

                    <button
                        onClick={handleSaveWorkout}
                        className="p-1 rounded-md bg-orange-primary text-black text-sm"
                    >
                        Exercicios adicionados
                    </button>
                </div>
            )}
            <div className="flex flex-col gap-6 ">{children}</div>
        </section>
    );
}
