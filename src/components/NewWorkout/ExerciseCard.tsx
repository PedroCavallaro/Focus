import { useNewWorkout } from "@/src/hooks/useNewWorkout";
import Image from "next/image";
import { Input } from "../Input";
import { useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Workout } from "@/src/@types/types";

interface ExerciseCardProps {
    id: string;
    exercise: string;
    gifUrl: string;
    handleExerciseConfig: (
        exercise: keyof Workout,
        id: number,
        gifUrl: string,
        reps?: number,
        kg?: number
    ) => void;
}

const ExerciseConfig = ({
    i,
    handleExerciseConfig,
    exercise,
    gifUrl,
}: ExerciseCardProps & { i: number }) => {
    return (
        <>
            <p className="text-center" key={1}>
                {i + 1}
            </p>
            <Input
                type="number"
                onChange={(e) => {
                    handleExerciseConfig(
                        exercise as keyof Workout,
                        i,
                        gifUrl,
                        Number(e.target.value),
                        undefined
                    );
                }}
                key={2}
            />
            <Input
                type="number"
                key={3}
                onChange={(e) =>
                    handleExerciseConfig(
                        exercise as keyof Workout,
                        i,
                        gifUrl,
                        undefined,
                        Number(e.target.value)
                    )
                }
            />
        </>
    );
};

export default function ExerciseCard({
    id,
    exercise,
    handleExerciseConfig,
    gifUrl,
}: ExerciseCardProps) {
    const [inputsQtd, setInputsQtd] = useState(1);
    const [cardOpen, setCardOpen] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);

    const handleCardClick = () => {
        setCardOpen((prev) => !prev);
    };

    return (
        <div
            className="w-full h-24  data-[card-open=true]:h-auto bg-white rounded-md flex flex-col overflow-hidden items-center transition-all"
            data-card-open={cardOpen}
            onClick={(e) => !cardOpen && handleCardClick()}
        >
            <div className="flex justify-between flex-grow w-full items-center">
                <p className="text-black text-2xl p-2">{exercise}</p>
                {/* <Image
                    src={gifUrl}
                    width={100}
                    height={100}
                    className="object-fill"
                    alt={exercise}
                /> */}
            </div>
            <div className="abolute items-center gap-3 w-full h-[18rem] bg-white text-black flex flex-col">
                <div>
                    <div className="grid grid-cols-3 gap-x-20 px-2  justify-start overflow-scroll ">
                        <p className="text-center">Serie</p>
                        <p>Reps</p>
                        <p>KG</p>
                    </div>
                    <div
                        ref={divRef}
                        className="grid grid-cols-3 gap-x-20 px-2 h-14 justify-center items-center overflow-scroll "
                    >
                        {Array(inputsQtd)
                            .fill(0)
                            .map((e, i) => {
                                return (
                                    <ExerciseConfig
                                        id={id}
                                        exercise={exercise}
                                        gifUrl={gifUrl}
                                        handleExerciseConfig={
                                            handleExerciseConfig
                                        }
                                        key={i}
                                        i={i}
                                    />
                                );
                            })}
                    </div>
                </div>

                <button
                    className="flex justify-start p-2 items-center gap-2"
                    onClick={() => {
                        setInputsQtd((prev) => (prev = prev + 1));
                        divRef.current!.scrollTop =
                            divRef.current!.scrollHeight;
                    }}
                >
                    <div className="w-10 h-10 bg-orange-primary rounded-md flex items-center justify-center">
                        <AiOutlinePlus />
                    </div>
                    <p>Adicionar serie</p>
                </button>
                <button className="bg-orange-primary flex items-center justify-center p-2 w-[50%] rounded-md">
                    <p>Salvar</p>
                </button>
                <button
                    onClick={() => {
                        handleCardClick();
                        setInputsQtd((prev) => (prev = 1));
                    }}
                    className=" flex items-center justify-center p-2 w-[50%] rounded-md font-light"
                >
                    <p>Fechar</p>
                </button>
            </div>
        </div>
    );
}
