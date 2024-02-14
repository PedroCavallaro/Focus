import { WorkoutSeries } from "@/src/@types/types";
import { HiOutlinePencil } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import DayWorkoutListItem from "./DayWorkoutListItem";
import Image from "next/image";

interface DayWorkoutCardProps {
    exercise: string;
    gif: string;
    pr: string;
    series: Array<WorkoutSeries>;
    fromExercisesList?: boolean;
    removeExerciseFromWorkout?: (name: string) => void;
}
// exerciseSet
export default function DayWorkoutCard({
    exercise,
    pr,
    gif,
    series,
    fromExercisesList,
    removeExerciseFromWorkout,
}: DayWorkoutCardProps) {
    return (
        <div className="text-white bg-blend-darken  rounded-[10px] min-h-[15rem] max-h-[20rem]  w-full flex flex-col gap-5">
            <div>
                <div className="flex justify-between items-center py-2 border-b-main ">
                    <div>
                        <h3 className="text-2xl font-light ">{exercise}</h3>
                    </div>
                    {fromExercisesList ? (
                        <button
                            onClick={() => removeExerciseFromWorkout!(exercise)}
                            className=" -top-4 p-2 bg-orange-primary  flex items-center text-black justify-center rounded-lg"
                        >
                            <FaRegTrashAlt />
                        </button>
                    ) : (
                        <button className=" -top-4 p-2 bg-orange-primary  flex items-center text-black justify-center rounded-lg">
                            <HiOutlinePencil />
                        </button>
                    )}
                </div>
                {!fromExercisesList && (
                    <p className="text-sm mt-2 font-thin">PR {pr}</p>
                )}
            </div>
            <div className="flex justify-between">
                <ul className="text-[15px] font-light flex flex-col gap-[12px]">
                    {series.map(({ kg, reps }, i) => (
                        <DayWorkoutListItem
                            key={i}
                            reps={reps!}
                            fromExercisesList={fromExercisesList}
                            index={i + 1}
                            kg={kg!}
                        />
                    ))}
                </ul>
                <div>
                    <Image
                        src={"/supino.gif"}
                        alt="back"
                        width={150}
                        height={150}
                        className=" rounded-[5px] object-cover"
                        loading="eager"
                    />
                </div>
            </div>
        </div>
    );
}
