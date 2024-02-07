import { useNewWorkout } from "@/src/hooks/useNewWorkout";
import Image from "next/image";

interface ExerciseCardProps {
    id: string;
    exercise: string;
    gifUrl: string;
}

const inputs = [1];

export default function ExerciseCard({
    id,
    exercise,
    gifUrl,
}: ExerciseCardProps) {
    const { exercise: a, handleExerciseClick } = useNewWorkout();

    return (
        <button
            type="button"
            className="w-full h-24  bg-white rounded-md flex flex-col overflow-hidden items-center"
            onClick={(e) => {
                e.currentTarget.style.height = "auto";
            }}
        >
            <div className="flex justify-between flex-grow w-full items-center">
                <p className="text-black text-2xl p-2">{exercise}</p>
                <Image
                    src={gifUrl}
                    width={100}
                    height={100}
                    className="object-fill"
                    alt={exercise}
                />
            </div>
            <div className="abolute w-full h-[20rem] bg-black flex flex-col">
                <div className="grid grid-cols-3 gap-x-20 px-2">
                    <p>Serie</p>
                    <p>Reps</p>
                    <p>KG</p>
                    {inputs.map((e, i) => {
                        return (
                            <>
                                <p>{i + 1}</p>
                                <input type="text" key={i} />
                                <input type="text" key={i} />
                            </>
                        );
                    })}
                </div>
                <button>adicionar serie</button>
            </div>
        </button>
    );
}
