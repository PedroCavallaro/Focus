import { ReactNode } from "react";
import { CiLogout } from "react-icons/ci";
interface MuscleSection {
    children: ReactNode;
    isMuscleSelected: boolean;
    handleClick: (muscleId: number) => void;
}

export default function MuscleSection({
    children,
    isMuscleSelected,
    handleClick,
}: MuscleSection) {
    return (
        <section className="flex flex-col gap-5">
            {!isMuscleSelected ? (
                <h2 className="text-xl font-light">Músculo</h2>
            ) : (
                <button
                    className="flex gap-2 justify-start items-center"
                    onClick={() => handleClick(-1)}
                >
                    <CiLogout size={20} />
                    <p className="text-xl font-light">Voltar</p>
                </button>
            )}
            <div className="flex flex-col gap-6 ">{children}</div>
        </section>
    );
}
