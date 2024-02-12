interface DayWorkoutListItemProps {
    index: number;
    kg: number | undefined;
    reps: number | undefined;
}
export default function DayWorkoutListItem({
    index,
    reps,
    kg,
}: DayWorkoutListItemProps) {
    return (
        <>
            <li className="flex gap-2">
                <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-4 h-4  outline-none"
                />
                <p className="text-sm font-thin">{`${index} serie: ${reps} x ${kg}`}</p>
                {/* 1 serie: 10 reps x 22,5kg */}
            </li>
        </>
    );
}
