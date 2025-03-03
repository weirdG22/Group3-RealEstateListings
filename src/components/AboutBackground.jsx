import Timing from "./Timer";
import { useState, useEffect } from "react";

//Basic background mover for the about page

const backgroundSections = [
    {
        background: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        contentText: 'We are here for you'
    },
    {
        background: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        contentText: 'We strive to make your expeience finding a new home as easily as possible',
    },
    {
        background: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        contentText: "We work hard so that you don't have to",
    },
    {
        background: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        contentText: 'Be sure to find a house that is best for you!!!',
    },
    {
        background: 'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        contentText: 'We are a small group that wants to help those around us find a new forever home!!',
    },
    {
        background: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        contentText: 'Just leave the hard work to us',
    },
]



export default function Background(){
    const [currentTab, setcurrentTab] = useState(0);
    const changeTab = () => {
        setcurrentTab((prevTab) => (prevTab + 1) % backgroundSections.length);
    };
   
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const preloadImage = new Image();
        preloadImage.src = backgroundSections[currentTab].background;
        
        preloadImage.onload = () => {
            setImageLoaded(true);
        };
        setImageLoaded(false);
    }, [currentTab]); 

    return (
        <div className="relative w-full h-full overflow-hidden">
        <Timing cycleLength={backgroundSections.length} timeLength={20000} onTimeUpdate={changeTab} />
        {/* Background Section */}
        <div
            className={`w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out`}
            style={{
                backgroundImage: `url(${backgroundSections[currentTab].background})`,
            }}
        >
            {/* Content Text */}
            <div className="flex items-center justify-center h-full text-center px-6 text-white">
                <h2 className={`absolute bottom-10 left-10 text-4xl ${currentTab === 0 ? "text-black" : "text-white"} font-semibold ${backgroundSections[currentTab].background}`}>
                    {backgroundSections[currentTab].contentText}
                </h2>
            </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {backgroundSections.map((_, index) => (
                <button
                    key={index}
                    onClick={() => changeTab(index)}
                    className={`w-3 h-3 rounded-full ${index === currentTab ? 'bg-gray-900' : 'bg-gray-400'} transition-all duration-300`}
                />
            ))}
        </div>
    </div>
    );
};

