import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { serverApi } from "../lib/api";
import { Exercises, Workout } from "../@types/types";
import { getUser } from "../util/user";
import { useQuery } from "react-query";
import { DaysOfWeek } from "../util/date";

interface WorkOutContextProps {
    isAll: boolean;
    switchView: () => void;
    workouts: Array<Workout> | undefined;
    workoutOfTheDay: Workout[] | undefined;
    isLoading: boolean;
    exercises: Exercises | undefined;
}

const WorkoutContext = createContext({} as WorkOutContextProps);

const getUserWorkout = async () => {
    const user = getUser();
    const res = await serverApi.get(`/workout/user/${user.id}`);

    return res.data as Workout[];
};

export const WorkOutProvider = ({ children }: { children: ReactNode }) => {
    const [isAll, setIsAll] = useState(false);
    const { data: workouts, isLoading } = useQuery("workout", getUserWorkout);

    const switchView = () => {
        setIsAll((prev) => !prev);
    };

    const day = new Date().getDay().toString() as DaysOfWeek;

    const workoutOfTheDay: Workout[] | undefined = useMemo(() => {
        return workouts?.filter((e) => e.day == day);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [day]);

    let exercises = undefined;

    if (workoutOfTheDay) {
        exercises = workoutOfTheDay[0].exercises;
    }

    return (
        <WorkoutContext.Provider
            value={{
                isAll,
                switchView,
                workouts,
                isLoading,
                exercises,
                workoutOfTheDay,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
};

export const useWorkOut = () => useContext(WorkoutContext);
