"use client";
import MuscleSection from "@/src/components/NewWorkout/MuscleSection";
import WorkoutInputs from "@/src/components/NewWorkout/WorkoutInputs";
import { useNewWorkout } from "@/src/hooks/useNewWorkout";
import SavedWorkout from "@/src/components/NewWorkout/SavedWorkout";
import { useExercises } from "@/src/hooks/useExercises";
import ExercisesPicker from "@/src/components/NewWorkout/ExercisesPicker";
import MusclePicker from "@/src/components/NewWorkout/MusclePicker";
import DayWorkoutCard from "@/src/components/Workouts/DayWorkoutCard";

export default function Page() {
    const {
        handleNameAndDay,
        saveNewExercise,
        handleSaveWorkout,
        isOpen,
        addExerciseIntoWorkout,
        workout,
        removeExerciseFromWorkout,
    } = useNewWorkout();
    const { data, handleClick, muscleId, isLoading } = useExercises();
    const isMuscleSelected = muscleId !== -1;
    return (
        <>
            <SavedWorkout
                handleSaveWorkout={handleSaveWorkout}
                isWorkoutOpen={isOpen}
                day={workout.day}
                name={workout.name}
            >
                {workout?.exercises && (
                    <>
                        {Object.keys(workout.exercises).map((e, i) => {
                            return (
                                <DayWorkoutCard
                                    key={i}
                                    fromExercisesList={true}
                                    exercise={e}
                                    gif=""
                                    pr=""
                                    series={workout.exercises[e].exec}
                                    removeExerciseFromWorkout={
                                        removeExerciseFromWorkout
                                    }
                                />
                            );
                        })}
                    </>
                )}
            </SavedWorkout>
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
