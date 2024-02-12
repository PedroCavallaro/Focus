import { useWorkOut } from "@/src/context/WorkoutContext";
import { DaysOfWeek, daysOfTheWeek } from "@/src/util/date";
import { ReactNode } from "react";
import { GoArrowSwitch } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
interface WorkoutSectionProps {
    children: ReactNode;
    workoutOfTheDay: string;
}

export default function WorkoutSection({
    children,
    workoutOfTheDay,
}: WorkoutSectionProps) {
    const { isAll, switchView } = useWorkOut();
    return (
        <main className=" w-full rounded-tl-lg rounded-tr-lg  px-3">
            <div className="flex justify-between py-5 items-center">
                {!isAll ? (
                    <p className="text-lg font-light">
                        {
                            daysOfTheWeek[
                                new Date().getDay().toString() as DaysOfWeek
                            ]
                        }
                    </p>
                ) : (
                    <div className="flex gap-3 items-center">
                        <p className="text-2xl  font-light">Treinos</p>
                        <button className="rounded-full p-2 mb-1 bg-orange-primary text-black ">
                            <Link href={"/new/workout"} scroll={false}>
                                <AiOutlinePlus />
                            </Link>
                        </button>
                    </div>
                )}

                <button onClick={switchView} className="text-zinc-500 ">
                    {isAll ? "Treino do dia" : "Meus treinos"}
                </button>
            </div>
            {!isAll && (
                <div className="flex gap-3 items-center">
                    <h2 className="text-2xl font-medium font-mont">
                        {workoutOfTheDay}
                    </h2>
                    <button className="rounded-full p-2 mb-1 bg-orange-primary text-black ">
                        <GoArrowSwitch />
                    </button>
                </div>
            )}
            <div className="flex flex-col gap-[30px] mt-5">{children}</div>
        </main>
    );
}
