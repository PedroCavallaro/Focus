"use client";
import { ReactNode } from "react";
import { WorkOutProvider } from "../context/WorkoutContext";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../lib/queryClient";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <WorkOutProvider>{children}</WorkOutProvider>
        </QueryClientProvider>
    );
}
