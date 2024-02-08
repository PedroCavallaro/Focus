"use client";
import MuscleSection from "@/src/components/NewWorkout/MuscleSection";
import MuscleCard from "@/src/components/NewWorkout/MuscleCard";
import WorkoutInputs from "@/src/components/NewWorkout/WorkoutInputs";
import { useNewWorkout } from "@/src/hooks/useNewWorkout";
import ExerciseCard from "@/src/components/NewWorkout/ExerciseCard";
import MuscleLoading from "@/src/components/NewWorkout/MuscleLoading";

export default function Page() {
    const { data, handleClick, muscleId, isLoading } = useNewWorkout();
    const isMuscleSelected = muscleId !== -1;
    return (
        <main className="p-4 flex flex-col gap-10">
            <p className="text-xl font-light">Novo treino</p>
            <div className="flex flex-col gap-10 ">
                <WorkoutInputs />
                <MuscleSection>
                    {isMuscleSelected ? (
                        <>
                            {data![muscleId].exercises.map(
                                ({ name, description, gifUrl, _id }, i) => {
                                    return (
                                        <ExerciseCard
                                            key={i}
                                            id={_id}
                                            exercise={name}
                                            gifUrl={gifUrl}
                                        />
                                    );
                                }
                            )}
                        </>
                    ) : (
                        <>
                            {!isLoading ? (
                                data?.map(({ targetMuscle }, i) => {
                                    return (
                                        <MuscleCard
                                            key={i}
                                            index={i}
                                            muscle={targetMuscle}
                                            handleClick={handleClick}
                                        />
                                    );
                                })
                            ) : (
                                <>
                                    <MuscleLoading />
                                    <MuscleLoading />
                                    <MuscleLoading />
                                    <MuscleLoading />
                                    <MuscleLoading />
                                </>
                            )}
                        </>
                    )}
                </MuscleSection>
            </div>
        </main>
    );
}
