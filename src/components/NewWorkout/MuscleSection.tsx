import { ReactNode } from "react";

export default function MuscleSection({ children }: { children: ReactNode }) {
    return (
        <section className="flex flex-col gap-5">
            <h2 className="text-xl font-light">Músculo</h2>
            <div className="flex flex-col gap-10">{children}</div>
        </section>
    );
}
