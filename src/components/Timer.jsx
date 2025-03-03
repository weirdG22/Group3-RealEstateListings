import { useEffect } from "react";

// Timer to iterate through different elements throughout the project
const Timing = ({ cycleLength, timeLength, onTimeUpdate }) => {
    useEffect(() => {
        const timerInterval = setInterval(() => {
            // Call the parent callback to update the tab
            onTimeUpdate();
        }, timeLength);

        return () => clearInterval(timerInterval); // Cleanup on unmount
    }, [cycleLength, timeLength, onTimeUpdate]); // Ensure the interval is reset if anything changes

    // This component doesn't render anything
    return null;
};

export default Timing;
