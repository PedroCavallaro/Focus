"use client";
import MuscleSection from "@/src/components/NewWorkout/MuscleSection";
import MuscleCard from "@/src/components/NewWorkout/MuscleCard";
import WorkoutInputs from "@/src/components/NewWorkout/WorkoutInputs";
import { useNewWorkout } from "@/src/hooks/useNewWorkout";
import MuscleLoading from "@/src/components/NewWorkout/MuscleLoading";
import SavedWorkout from "@/src/components/NewWorkout/SavedWorkout";
import { useExercises } from "@/src/hooks/useExercises";
import ExercisesPicker from "@/src/components/NewWorkout/ExercisesPicker";
import MusclePicker from "@/src/components/NewWorkout/MusclePicker";

export default function Page() {
    const {
        handleNameAndDay,
        saveNewExercise,
        handleSaveWorkout,
        isOpen,
        addExerciseIntoWorkout,
        workout,
    } = useNewWorkout();
    const { data, handleClick, muscleId, isLoading } = useExercises();
    const isMuscleSelected = muscleId !== -1;
    console.log(workout);
    return (
        <>
            <SavedWorkout
                workout={workout}
                handleSaveWorkout={handleSaveWorkout}
                isWorkoutOpen={isOpen}
            />
            <main className="p-4 flex flex-col gap-10">
                <p className="text-xl font-light">Novo treino</p>
                <div className="flex flex-col gap-10 ">
                    <WorkoutInputs handleNameAndDay={handleNameAndDay} />
                    <MuscleSection
                        isMuscleSelected={isMuscleSelected}
                        handleClick={handleClick}
                        handleSaveWorkout={handleSaveWorkout}
                    >
                        {isMuscleSelected ? (
                            <ExercisesPicker
                                addExerciseIntoWorkout={addExerciseIntoWorkout}
                                exercises={data!}
                                muscleId={muscleId}
                                saveNewExercise={saveNewExercise}
                            />
                        ) : (
                            <MusclePicker
                                handleClick={handleClick}
                                isLoading={isLoading}
                                muscles={data!}
                            />
                        )}
                    </MuscleSection>
                </div>
            </main>
        </>
    );
}
