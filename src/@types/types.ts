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
