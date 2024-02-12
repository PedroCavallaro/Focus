import { ExerciseResponse } from "@/src/@types/types";
import ExerciseCard from "./ExerciseCard";

interface ExercisesPickerProps {
    exercises: ExerciseResponse;
    muscleId: number;
    saveNewExercise: (
        exercise: string | number,
        id: number,
        gifUrl: string,
        kg?: number | undefined,
        reps?: number | undefined
    ) => void;
    addExerciseIntoWorkout: (exercise: string) => void;
}

export default function ExercisesPicker({
    exercises,
    muscleId,
    saveNewExercise,
    addExerciseIntoWorkout,
}: ExercisesPickerProps) {
    return (
        <>
            {exercises![muscleId].exercises.map(
                ({ name, description, gifUrl, _id }, i) => {
                    return (
                        <>
                            <ExerciseCard
                                addExerciseIntoWorkout={addExerciseIntoWorkout}
                                key={i}
                                id={_id}
                                handleExerciseConfig={saveNewExercise}
                                exercise={name}
                                gifUrl={"gifUrl"}
                            />
                            <ExerciseCard
                                key={1}
                                addExerciseIntoWorkout={addExerciseIntoWorkout}
                                id={_id}
                                handleExerciseConfig={saveNewExercise}
                                exercise={"teste"}
                                gifUrl={"gifUrl"}
                            />
                        </>
                    );
                }
            )}
        </>
    );
}
