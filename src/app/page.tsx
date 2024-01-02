"use client";
import DayWorkoutCard from "../components/Workouts/DayWorkoutCard";
import WorkoutCard from "../components/Workouts/WorkoutCard";
import WorkoutModal from "../components/Workouts/WorkoutModal";
import WorkoutSection from "../components/Workouts/WorkoutSection";
import { useWorkOut } from "../context/WorkoutContext";
import { workoutTest } from "../util/testWorkouts";

export default function Home() {
    const { isAll } = useWorkOut();
    return (
        <>
            <WorkoutSection workoutOfTheDay="Peito">
                <div
                    className={`h-fit overflow-x-scroll  gap-5 pb-10 ${
                        isAll ? "flex  flex-col" : "hidden"
                    }`}
                >
                    {workoutTest.map((e, i) => (
                        <div className="flex flex-col gap-2" key={i}>
                            <p>Segunda</p>
                            <WorkoutCard />
                        </div>
                    ))}
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
            <WorkoutModal />
        </>
    );
}
