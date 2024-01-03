"use client";
import DayWorkoutCard from "../components/Workouts/DayWorkoutCard";
import WorkoutModal from "../components/Workouts/WorkoutModal";
import WorkoutSection from "../components/Workouts/WorkoutSection";
import { useWorkOut } from "../context/WorkoutContext";
import { workoutTest } from "../util/testWorkouts";
import dynamic from "next/dynamic";

const DynamicAllWorkOutSection = dynamic(
    () => import("../components/Workouts/AllWorkOutsSection"),
    {
        loading: () => <p>Carregando...</p>,
    }
);

export default function Home() {
    const { isAll } = useWorkOut();
    return (
        <>
            <WorkoutModal />
            <WorkoutSection workoutOfTheDay="Peito">
                <div
                    className={`h-fit overflow-x-scroll  gap-5 pb-10 ${
                        isAll ? "flex  flex-col" : "hidden"
                    }`}
                >
                    <DynamicAllWorkOutSection workouts={workoutTest} />
                </div>
                <div
                    className={`h-fit overflow-x-scroll  gap-5 pb-10 ${
                        isAll ? "hidden" : "flex flex-col"
                    }`}
                >
                    {workoutTest.map(({ exercise, pr, series, gif }, i) => (
                        <DayWorkoutCard
                            key={i}
                            gif={gif}
                            exercise={exercise}
                            pr={pr}
                            series={series}
                        />
                    ))}
                </div>
            </WorkoutSection>
        </>
    );
}
