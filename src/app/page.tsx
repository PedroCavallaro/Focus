import DayWorkoutCard from "../components/Workouts/DayWorkoutCard";
import WorkoutSection from "../components/Workouts/WorkoutSection";

export default function Home() {
    const arr = Array.from({ length: 15 }, () => 0);
    return (
        <WorkoutSection>
            <div className="flex flex-col gap-[20px]">
                <h2 className="text-2xl font-bold">Peito</h2>
                <div className="h-fit overflow-x-scroll flex  flex-col gap-5 ">
                    {arr.map((e, i) => (
                        <DayWorkoutCard key={i} />
                    ))}
                </div>
            </div>
        </WorkoutSection>
    );
}
