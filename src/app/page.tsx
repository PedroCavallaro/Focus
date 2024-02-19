"use client";
import DayWorkoutCard from "../components/Workouts/DayWorkoutCard";
import UserNotAuthenticated from "../components/Workouts/UserNotAuthenticated";
import WorkoutSection from "../components/Workouts/WorkoutSection";
import { useAuth } from "../context/AuthContext";
import { useWorkOut } from "../context/WorkoutContext";

import dynamic from "next/dynamic";

const DynamicAllWorkOutSection = dynamic(
    () => import("../components/Workouts/AllWorkOutsSection"),
    {
        loading: () => <p>Carregando...</p>,
    }
);

export default function Home() {
    const { isAll, workouts, isLoading, exercises, workoutOfTheDay } =
        useWorkOut();
    const { isAuth } = useAuth();
    console.log(exercises);
    return (
        <div>
            {isAuth ? (
                <WorkoutSection workoutOfTheDay={""}>
                    <div
                        className={`h-fit overflow-x-scroll  gap-5 pb-10 ${
                            isAll ? "flex  flex-col" : "hidden"
                        }`}
                    >
                        <DynamicAllWorkOutSection workouts={workouts} />
                    </div>
                    <div
                        className={`h-fit overflow-x-scroll  gap-10 pb-10 ${
                            isAll ? "hidden" : "flex flex-col"
                        }`}
                    >
                        {exercises &&
                            Object.keys(exercises!).map((e, i) => {
                                return (
                                    <DayWorkoutCard
                                        key={i}
                                        gif={exercises![e].gifUrl}
                                        // @ts-ignore
                                        exercise={exercises![e].exercise}
                                        pr={""}
                                        series={exercises![e].execution}
                                    />
                                );
                            })}
                    </div>
                </WorkoutSection>
            ) : (
                <UserNotAuthenticated />
            )}
        </div>
    );
}
