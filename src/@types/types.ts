import { DaysOfWeek } from "../util/date";


export type WorkoutSeries = {
    kg: number | undefined;
    reps: number | undefined;
};
export type Workout = {
    name: string;
    day: DaysOfWeek;
    exercises: Exercises;
};

export type Exercises = {
    [key: string]: {
        gifUrl: string;
        execution: [
            {
                kg: number | undefined;
                reps: number | undefined;
            }
        ];
    };
};

export type ExerciseResponse = [
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

export type AuthResponse = { token: string } & { message: string };
