import { Workout } from "@/src/@types/types";
import WorkoutCard from "./WorkoutCard";

export default function AllWorkOutsSection({
    workouts,
}: {
    workouts: Array<Workout> | undefined;
}) {
    return (
        <>
            {workouts?.map((e, i) => (
                <div className="flex flex-col gap-2" key={i}>
                    <p>Segunda</p>
                    <WorkoutCard />
                </div>
            ))}
        </>
    );
}
