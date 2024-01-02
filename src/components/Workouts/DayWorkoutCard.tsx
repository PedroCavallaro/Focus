import { WorkoutSeries } from "@/src/@types/types";
import { HiOutlinePencil } from "react-icons/hi";
import DayWorkoutListItem from "./DayWorkoutListItem";
import Image from "next/image";

interface DayWorkoutCardProps {
    exercise: string;
    pr: string;
    series: Array<WorkoutSeries>;
}
export default function DayWorkoutCard({
    exercise,
    pr,
    series,
}: DayWorkoutCardProps) {
    return (
        <div className="bg-[#d8dbe2] bg-blend-darken text-black rounded-[10px] p-3 min-h-[15rem] max-h-[18rem]  w-full flex flex-col gap-5">
            <div className="flex justify-between">
                <div>
                    <h3 className="text-lg font-bold">{exercise}</h3>
                    <p>PR: {pr}</p>
                </div>
                <button className="relative -top-4">
                    <HiOutlinePencil />
                </button>
            </div>
            <div className="flex justify-between">
                <ul className="text-md font-light flex flex-col gap-[12px]">
                    {series.map(({ kg, text }, i) => (
                        <DayWorkoutListItem
                            key={i}
                            reps={text}
                            index={i + 1}
                            kg={kg}
                        />
                    ))}
                </ul>
                <div>
                    <Image
                        src={"/barrafixa.gif"}
                        alt="back"
                        width={300}
                        height={300}
                        className="w-36 h-full bg-white  rounded-[5px]"
                    />
                </div>
            </div>
        </div>
    );
}
