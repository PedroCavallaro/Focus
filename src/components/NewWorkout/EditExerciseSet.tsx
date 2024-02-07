import { useNewWorkout } from "@/src/hooks/useNewWorkout";

export default function EditExerciseSet() {
    const { exercise } = useNewWorkout();

    return (
        <div className="w-[23rem] text-black h-[25rem] bg-white ">
            <div>
                <p>Supino reto</p>
            </div>
        </div>
    );
}
