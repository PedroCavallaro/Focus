import { useState } from "react";
import { serverApi } from "../lib/api";
import { useQuery } from "react-query";

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
    const [exercise, setExercise] = useState({});
    const { data, isLoading } = useQuery<ExerciseResponse>(
        "exercises",
        getExercises
    );

    const handleClick = (muscleIndex: number) => {
        setMuscleId((prev) => (prev = muscleIndex));
    };
    const handleExerciseClick = (name: string, id: string) => {
        setExercise((prev) => (prev = { ...prev, name, id }));
    };
    return {
        exercise,
        handleExerciseClick,
        muscleId,
        handleClick,
        data,
        isLoading,
    };
}
