"use client";
import { Workout } from "../@types/types";
import Footer from "../components/Footer/Footer";
import DayWorkoutCard from "../components/Workouts/DayWorkoutCard";
import WorkoutSection from "../components/Workouts/WorkoutSection";
import { useWorkOut } from "../context/WorkoutContext";
import { DaysOfWeek } from "../util/date";
import { workoutTest } from "../util/testWorkouts";

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

    return (
        <div>
            <WorkoutSection
                workoutOfTheDay={!isLoading ? workoutOfTheDay![0].name : ""}
            >
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
                    {!isLoading &&
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
        </div>
    );
}
