import { useState, useLayoutEffect } from "react";

export const useScroll = () => {
    const [isMovingBottom, setIsMovingBottom] = useState(false);

    useLayoutEffect(() => {
        var oldScrollY = window.scrollY;
        window.addEventListener("scroll", (e) => {
            if (oldScrollY < window.scrollY) {
                setIsMovingBottom((prev) => (prev = true));
            } else {
                setIsMovingBottom((prev) => (prev = false));
            }
            oldScrollY = window.scrollY;
        });
    });

    return {
        isMovingBottom,
    };
};
