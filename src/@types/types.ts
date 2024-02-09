export type DayWorkout = {
    exercise: string;
    pr: string;
    gif: string;
    series: Array<WorkoutSeries>;
};
export type WorkoutSeries = {
    text: string;
    kg: string;
};
export type Workout = {
    name: string;
    day: number;
    exercises: Exercises;
};

export type Exercises = [
    {
        exercise: string;
        gifUrl: string;
        exec: [
            {
                i: number;
                kg: number;
                reps: number;
            }
        ];
    }
];

export type AuthResponse = { token: string } & { message: string };
