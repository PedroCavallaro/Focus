interface MuscleCardProps {
    index: number;
    muscle: string;
    handleClick: (index: number) => void;
}

export default function MuscleCard({
    muscle,
    handleClick,
    index,
}: MuscleCardProps) {
    return (
        <button
            className="w-full h-24 bg-white rounded-md"
            onClick={() => handleClick(index)}
        >
            <p className="text-black text-2xl">{muscle}</p>
        </button>
    );
}
