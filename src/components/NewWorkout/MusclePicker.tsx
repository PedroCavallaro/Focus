import { ExerciseResponse } from "@/src/@types/types";
import MuscleLoading from "./MuscleLoading";
import MuscleCard from "./MuscleCard";

interface MusclePickerProps {
    muscles: ExerciseResponse;
    isLoading: boolean;
    handleClick: (muscleIndex: number) => void;
}

export default function MusclePicker({
    isLoading,
    muscles,
    handleClick,
}: MusclePickerProps) {
    return (
        <>
            {isLoading && (
                <>
                    <MuscleLoading />
                    <MuscleLoading />
                    <MuscleLoading />
                    <MuscleLoading />
                    <MuscleLoading />
                </>
            )}
            {muscles?.map(({ targetMuscle }, i) => {
                return (
                    <MuscleCard
                        key={i}
                        index={i}
                        muscle={targetMuscle}
                        handleClick={handleClick}
                    />
                );
            })}
        </>
    );
}
