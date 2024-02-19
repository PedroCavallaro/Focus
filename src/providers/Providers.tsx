"use client";
import { ReactNode } from "react";
import { WorkOutProvider } from "../context/WorkoutContext";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../lib/queryClient";
import { AuthProvider } from "../context/AuthContext";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <WorkOutProvider>{children}</WorkOutProvider>
            </AuthProvider>
        </QueryClientProvider>
    );
}
