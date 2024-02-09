import { useState } from "react";
import { serverApi } from "../lib/api";
import { useQuery } from "react-query";
import { Workout } from "../@types/types";

type ExerciseResponse = [
    {
        targetMuscle: string;
        exercises: [
            {
                name: string;
                description: string;
                gifUrl: string;
                _id: string;
            }
        ];
    }
];

async function getExercises() {
    const { data } = await serverApi.get("exercise/list");

    return data;
}
export function useNewWorkout() {
    const [muscleId, setMuscleId] = useState(-1);

    const [workout, setWorkout] = useState<Workout>({} as Workout);

    const { data, isLoading } = useQuery<ExerciseResponse>(
        "exercises",
        getExercises
    );

    const handleClick = (muscleIndex: number) => {
        setMuscleId((prev) => (prev = muscleIndex));
    };
    const saveNewExercise = (
        exercise: keyof Workout,
        id: string,
        kg?: number,
        reps?: number
    ) => {
        setWorkout((prev) => {
            console.log(workout);
        });
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
        handleNameAndDay,
        workout,
        setWorkout,
        saveNewExercise,
        muscleId,
        handleClick,
        data,
        isLoading,
    };
}
