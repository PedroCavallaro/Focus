import { ReactNode, createContext, useContext, useState } from "react";

interface WorkOutContextProps {
    isAll: boolean;
    switchView: () => void;
}

const WorkoutContext = createContext({} as WorkOutContextProps);

export const WorkOutProvider = ({ children }: { children: ReactNode }) => {
    const [isAll, setIsAll] = useState(false);

    const switchView = () => {
        setIsAll((prev) => !prev);
    };

    return (
        <WorkoutContext.Provider value={{ isAll, switchView }}>
            {children}
        </WorkoutContext.Provider>
    );
};

export const useWorkOut = () => useContext(WorkoutContext);
