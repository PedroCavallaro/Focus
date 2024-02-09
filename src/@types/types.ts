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
    exercise: [
        {
            exercise: string;
            gifUrl: string;
            exec: [
                {
                    kg: number;
                    reps: number;
                }
            ];
        }
    ];
};

export type AuthResponse = { token: string } & { message: string };
