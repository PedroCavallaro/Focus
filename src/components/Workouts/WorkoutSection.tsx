import { DaysOfWeek, daysOfTheWeek } from "@/src/util/date";
import { ReactNode } from "react";

interface WorkoutSectionProps {
    children: ReactNode;
    workoutOfTheDay: string;
}

export default function WorkoutSection({
    children,
    workoutOfTheDay,
}: WorkoutSectionProps) {
    return (
        <main className=" w-full rounded-tl-lg rounded-tr-lg  px-3">
            <div className="flex justify-between py-5">
                <p className="text-lg font-medium">
                    {
                        daysOfTheWeek[
                            new Date().getDay().toString() as DaysOfWeek
                        ]
                    }
                </p>
                <button className="text-zinc-500">Mostrar todos</button>
            </div>
            <div className="flex flex-col gap-[20px]">
                <h2 className="text-2xl font-medium font-mont">
                    {workoutOfTheDay}
                </h2>
                <div className="h-fit overflow-x-scroll flex  flex-col gap-5 pb-10 ">
                    {children}
                </div>
            </div>
        </main>
    );
}
