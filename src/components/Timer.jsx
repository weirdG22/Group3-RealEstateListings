import { useState, useEffect } from "react";

// Timer to iterate through different elements throughout the project
const Timing = ({ cycleLength, timeLength, onTimeUpdate }) => {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setCurrentTime((prev) => {
                const newTime = (prev + 1) % cycleLength;
                onTimeUpdate(newTime);  // Notify parent about the current time
                return newTime;
            });
        }, timeLength);

        return () => clearInterval(timerInterval);
    }, [cycleLength, timeLength, onTimeUpdate]);
};

export default Timing;
