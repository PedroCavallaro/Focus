"use client";
import DayWorkoutCard from "../components/Workouts/DayWorkoutCard";
import WorkoutModal from "../components/Workouts/WorkoutModal";
import WorkoutSection from "../components/Workouts/WorkoutSection";
import { useModal } from "../context/ModalContext";
import { workoutTest } from "../util/testWorkouts";

export default function Home() {
    const { isWorkoutModalOpen } = useModal();
    console.log(isWorkoutModalOpen);
    return (
        <>
            <WorkoutSection workoutOfTheDay="Peito">
                {workoutTest.map(({ exercise, pr, series }, i) => (
                    <DayWorkoutCard
                        key={i}
                        exercise={exercise}
                        pr={pr}
                        series={series}
                    />
                ))}
            </WorkoutSection>
            {isWorkoutModalOpen && <WorkoutModal />}
        </>
    );
}
