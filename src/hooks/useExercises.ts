import { useState } from "react";
import { useQuery } from "react-query";
import { serverApi } from "../lib/api";

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
export function useExercises() {
    const [muscleId, setMuscleId] = useState(-1);

    const { data, isLoading } = useQuery<ExerciseResponse>(
        "exercises",
        getExercises
    );

    const handleClick = (muscleIndex: number) => {
        setMuscleId((prev) => (prev = muscleIndex));
    };

    return {
        data,
        isLoading,
        muscleId,
        handleClick,
    };
}
