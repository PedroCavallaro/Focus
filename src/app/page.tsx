import DayWorkoutCard from "../components/Workouts/DayWorkoutCard";
import WorkoutModal from "../components/Workouts/WorkoutModal";
import WorkoutSection from "../components/Workouts/WorkoutSection";
import { workoutTest } from "../util/testWorkouts";

export default function Home() {
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
            <WorkoutModal />
        </>
    );
}
