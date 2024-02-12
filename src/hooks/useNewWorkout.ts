import { useState } from "react";
import { Exercises, Workout } from "../@types/types";

export function useNewWorkout() {
    const [isOpen, setIsOpen] = useState(true);
    const [exercises, setExercises] = useState<Exercises>({} as Exercises);
    const [workout, setWorkout] = useState({} as Workout);

    const handleSaveWorkout = () => {
        setIsOpen((prev) => !prev);
    };

    const saveNewExercise = (
        exercise: keyof Exercises,
        id: number,
        gifUrl: string,
        kg?: number,
        reps?: number
    ) => {
        if (exercises && exercises[exercise]) {
            const { exec } = exercises[exercise];

            if (!exec[id]) {
                exec.push({
                    kg: kg,
                    reps: reps,
                });
            }

            exec[id] = {
                ...exec[id],
                kg: kg ? kg : exec[id].kg,
                reps: reps ? reps : exec[id].reps,
            };

            return;
        }
        setExercises(
            (prev) =>
                (prev = {
                    ...prev,
                    [exercise as string]: {
                        gifUrl,
                        exec: [
                            {
                                kg: kg ? kg : 0,
                                reps: kg ? kg : 0,
                            },
                        ],
                    },
                })
        );
        return;
    };

    const addExerciseIntoWorkout = (exercise: string) => {
        if (!workout.exercises) {
            workout.exercises = {};
        }
        workout.exercises[exercise] = exercises[exercise];
    };

    const handleNameAndDay = (name: keyof Workout, value: string | number) => {
        setWorkout(
            (prev) =>
                (prev = {
                    ...prev,
                    [name]: value,
                })
        );
    };
    return {
        isOpen,
        addExerciseIntoWorkout,
        handleSaveWorkout,
        workout,
        handleNameAndDay,
        exercises,
        saveNewExercise,
    };
}
