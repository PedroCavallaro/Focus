import { DaysOfWeek, daysOfTheWeek } from "@/src/util/date";
import { ReactNode } from "react";

export default function WorkoutSection({ children }: { children: ReactNode }) {
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
            {children}
        </main>
    );
}
