import { useState } from "react";
import { Exercises, Workout } from "../@types/types";
import { serverApi } from "../lib/api";
import { getUser } from "../util/user";

export function useNewWorkout() {
    const [isOpen, setIsOpen] = useState(false);
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
            const { execution } = exercises[exercise];

            if (!execution[id]) {
                execution.push({
                    kg: kg,
                    reps: reps,
                });
                return;
            }
            execution[id] = {
                ...execution[id],
                kg: kg ? kg : execution[id].kg,
                reps: reps ? reps : execution[id].reps,
            };

            return;
        }

        setExercises(
            (prev) =>
                (prev = {
                    ...prev,
                    [exercise as string]: {
                        gifUrl,
                        execution: [
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

        setWorkout((prev) => (prev = { ...workout }));
    };
    const removeExerciseFromWorkout = (name: string) => {
        delete workout.exercises[name];

        setWorkout((prev) => (prev = { ...workout }));

        console.log(workout);
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
    const saveWorkout = async () => {
        const user = getUser();

        const res = await serverApi.post("/workout/new", {
            userId: user.id,
            workout: workout,
        });

        console.log(res.data);
    };

    return {
        isOpen,
        removeExerciseFromWorkout,
        addExerciseIntoWorkout,
        handleSaveWorkout,
        saveWorkout,
        workout,
        handleNameAndDay,
        exercises,
        saveNewExercise,
    };
}
