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
                {isAll ? (
                    <>
                        {workoutTest.map((e, i) => (
                            <div className="flex flex-col gap-2" key={i}>
                                <p>Segunda</p>
                                <WorkoutCard />
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {workoutTest.map(({ exercise, pr, series }, i) => (
                            <DayWorkoutCard
                                key={i}
                                exercise={exercise}
                                pr={pr}
                                series={series}
                            />
                        ))}
                    </>
                )}
            </WorkoutSection>
            <WorkoutModal />
        </>
    );
}
