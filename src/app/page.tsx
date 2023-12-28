import DayWorkoutCard from "../components/Workouts/DayWorkoutCard";
import WorkoutSection from "../components/Workouts/WorkoutSection";
import { workoutTest } from "../util/testWorkouts";

export default function Home() {
    return (
        <WorkoutSection>
            <div className="flex flex-col gap-[20px]">
                <h2 className="text-2xl font-medium font-mont">Peito</h2>
                <div className="h-fit overflow-x-scroll flex  flex-col gap-5 ">
                    {workoutTest.map(({ exercise, pr, series }, i) => (
                        <DayWorkoutCard
                            key={i}
                            exercise={exercise}
                            pr={pr}
                            series={series}
                        />
                    ))}
                </div>
            </div>
        </WorkoutSection>
    );
}
