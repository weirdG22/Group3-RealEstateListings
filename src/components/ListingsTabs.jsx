

//Imports for functionality
import { useState, useEffect } from "react";






export default function ListingTabs({ timeZone}) {

    //grabbng the date (Dynamic)
    const [currentDate, setcurrentDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setcurrentDate(new Date());
        }, 1000);

        return () => clearInterval(interval)
    }, [])
    
    const dateForm = new Intl.DateTimeFormat('en-US', {
        timeZone: timeZone,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(currentDate)

    return (
        <div>
            <p>{dateForm}</p>
        </div>
    )
};
