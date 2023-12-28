export type DayWorkout = {
    exercise: string;
    pr: string;
    series: Array<WorkoutSeries>;
};
export type WorkoutSeries = {
    text: string;
    kg: string;
};
