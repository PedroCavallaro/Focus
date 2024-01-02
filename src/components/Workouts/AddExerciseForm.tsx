interface AddExerciseProps {
    workout: string;
}
export default function AddExerciseForm({ workout }: AddExerciseProps) {
    return (
        <div>
            <h3 className="text-lg font-bold">Adicionar Exercicio</h3>
            <p>Treino: {workout}</p>
        </div>
    );
}
