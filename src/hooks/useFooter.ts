import { useState } from "react";

export function useFooter() {
    const [page, setPage] = useState(0);

    const changePage = (id: 0 | 1 | 2) => {
        setPage((prev) => (prev = id));
    };

    return {
        page,
        changePage,
    };
}
