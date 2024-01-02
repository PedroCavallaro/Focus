"use client";
import { ReactNode } from "react";
import { ModalProvider } from "../context/ModalContext";
import { WorkOutProvider } from "../context/WorkoutContext";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <ModalProvider>
            <WorkOutProvider>{children}</WorkOutProvider>
        </ModalProvider>
    );
}
