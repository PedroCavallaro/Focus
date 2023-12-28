import { useModal } from "@/src/context/ModalContext";

export default function WorkoutModal({}) {
    const { openWorkoutModal } = useModal();
    return (
        <div className="w-[100vw] h-[100vh] fixed top-0 z-50 bg-black bg-opacity-50 flex ">
            <div className="fixed bottom-0 h-[20rem] w-full bg-white rounded-tl-3xl rounded-tr-3xl">
                <button onClick={openWorkoutModal} className="text-black">
                    asdasd
                </button>
            </div>
        </div>
    );
}
