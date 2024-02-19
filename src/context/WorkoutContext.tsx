import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
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

export const WorkOutProvider = ({ children }: { children: ReactNode }) => {
    const [isAll, setIsAll] = useState(false);
    const [exercises, setExercises] = useState<Exercises>();
    const getUserWorkout = useCallback(async () => {
        const user = getUser();

        if (user) {
            const res = await serverApi.get(`/workout/user/${user?.id}`);

            return res.data as Workout[];
        }
        return undefined;
    }, []);
    const { data: workouts, isLoading } = useQuery("workout", getUserWorkout);

    const switchView = () => {
        setIsAll((prev) => !prev);
    };

    const day = new Date().getDay().toString() as DaysOfWeek;

    const workoutOfTheDay: Workout[] | undefined = useMemo(() => {
        return workouts?.filter((e) => e.day == day);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [day]);

    if (workoutOfTheDay) {
        setExercises((prev) => (prev = workoutOfTheDay[0].exercises));
    }
    const hasWorkout = workoutOfTheDay?.length ?? null;
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
