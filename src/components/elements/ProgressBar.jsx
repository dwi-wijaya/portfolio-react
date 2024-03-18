import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

const ProgressBar = ({ children }) => {
    const [progress, setProgress] = useState(false);
    const [prevLoc, setPrevLoc] = useState("");
    const location = useLocation();

    useEffect(() => {
        setPrevLoc(location.pathname);
        setProgress(true);
        if (location.pathname === prevLoc) {
            setPrevLoc("");
            //thanks to ankit sahu
        }
    }, [location]);

    useEffect(() => {
        setProgress(false);
    }, [prevLoc]);

    TopBarProgress.config({
        barColors: {
            "0": "hsl(24.91deg 95.5% 56.47%)",
        },
        shadowBlur: 5
    });

    return (
        <>
            {progress && <TopBarProgress />}
            {children}
        </>
    );
};

export default ProgressBar;
