"use client";
import MuscleSection from "@/src/components/NewWorkout/MuscleSection";
import MuscleCard from "@/src/components/Workouts/MuscleCard";
import WorkoutInputs from "@/src/components/NewWorkout/WorkoutInputs";

export default function page() {
    return (
        <main className="p-4 flex flex-col gap-10">
            <p className="text-xl font-light">Novo treino</p>
            <form className="flex flex-col gap-10 ">
                <WorkoutInputs />
                <MuscleSection>
                    <MuscleCard />
                </MuscleSection>
            </form>
        </main>
    );
}
