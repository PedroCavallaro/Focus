import { ReactNode, createContext, useContext, useState } from "react";

interface ModalContextProps {
    openWorkoutModal: () => void;
    isWorkoutModalOpen: boolean;
    openRoutineModal: () => void;
    isRoutineModalOpen: boolean;
}

const ModalContext = createContext({} as ModalContextProps);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);
    const [isRoutineModalOpen, setIsRoutineModalOpen] = useState(false);

    const openWorkoutModal = () => {
        setIsWorkoutModalOpen((prev) => !prev);
    };
    const openRoutineModal = () => {
        setIsRoutineModalOpen((prev) => !prev);
    };

    return (
        <ModalContext.Provider
            value={{
                isRoutineModalOpen,
                openWorkoutModal,
                openRoutineModal,
                isWorkoutModalOpen,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};
export const useModal = () => useContext(ModalContext);
