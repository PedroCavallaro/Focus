"use client";
import { useModal } from "@/src/context/ModalContext";
import AddExerciseForm from "./forms/AddExerciseForm";

export default function WorkoutModal({}) {
    const { openWorkoutModal, isWorkoutModalOpen } = useModal();
    return (
        <div
            className={`w-[100vw] h-[100vh] fixed  top-0 bg-opacity-50 flex   ${
                isWorkoutModalOpen
                    ? " bg-black h-[100vh] z-50 "
                    : "h-0  bg-transparent animate-close -z-10"
            } `}
        >
            <div
                className={`fixed bottom-0 w-full bg-white text-black rounded-tl-3xl rounded-tr-3xl  p-4 ${
                    isWorkoutModalOpen
                        ? "block  animate-open h-[50rem]"
                        : "hidden animate-modal h-0"
                }`}
            >
                <div className="relative">
                    <button
                        onClick={openWorkoutModal}
                        className="absolute right-0"
                    >
                        X
                    </button>
                </div>
                <AddExerciseForm workout="Peito" />
            </div>
        </div>
    );
}
