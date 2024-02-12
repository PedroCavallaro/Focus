import { Workout } from "@/src/@types/types";
import DayWorkoutCard from "../Workouts/DayWorkoutCard";

interface SavedWorkoutProps {
    handleSaveWorkout: () => void;
    isWorkoutOpen: boolean;
    workout: Workout;
}

export default function SavedWorkout({
    handleSaveWorkout,
    isWorkoutOpen,
    workout,
}: SavedWorkoutProps) {
    const { exercises } = workout;
    return (
        <div
            className="w-full  h-full fixed top-0  -z-10  data-[open=true]:z-20"
            data-open={isWorkoutOpen}
        >
            <div
                className=" w-[20rem] -right-[100%] data-[open=true]:right-0  absolute  h-full  bg-black transition-all"
                data-open={isWorkoutOpen}
            >
                <button onClick={handleSaveWorkout}>clica</button>
                <div className="flex flex-col gap-5">
                    {exercises && (
                        <>
                            {Object.keys(exercises).map((e, i) => {
                                return (
                                    <DayWorkoutCard
                                        key={i}
                                        exercise={e}
                                        gif=""
                                        pr=""
                                        series={exercises[e].exec}
                                    />
                                );
                            })}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
