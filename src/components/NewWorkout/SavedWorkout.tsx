import { ReactNode } from "react";
import { CgChevronLeft } from "react-icons/cg";
import { DaysOfWeek, daysOfTheWeek } from "@/src/util/date";

interface SavedWorkoutProps {
    handleSaveWorkout: () => void;
    isWorkoutOpen: boolean;
    children: ReactNode;
    name: string | undefined;
    day: DaysOfWeek | undefined;
}

export default function SavedWorkout({
    handleSaveWorkout,
    children,
    isWorkoutOpen,
    name,
    day,
}: SavedWorkoutProps) {
    return (
        <div
            className="w-full  h-full fixed top-0  -z-10 bg-black bg-opacity-50  data-[open=true]:z-20 "
            data-open={isWorkoutOpen}
        >
            <div
                className=" w-[20rem] -right-[100%] data-[open=true]:right-0  absolute  h-full border-l-main border-white border-opacity-70 bg-black transition-all "
                data-open={isWorkoutOpen}
            >
                <div className="p-2 overflow-hidden flex flex-col gap-3">
                    <button onClick={handleSaveWorkout}>
                        <CgChevronLeft size={20} />
                    </button>
                    <div className=" font-light flex justify-between items-center">
                        <p className="text-2xl">{name && name}</p>
                        <p className="text-md"> {daysOfTheWeek[day!]}</p>
                    </div>
                    <div className="flex flex-col gap-5 realative overflow-scroll ">
                        {children}
                    </div>
                </div>
                <div className="absolute bottom-10 w-full flex justify-center items-center p-2">
                    <button className="bg-orange-primary w-full h-12 rounded-lg text-black">
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}
