'use client';
import { useState, useEffect } from 'react';

const Odometer = ({ value, className, plus = false }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        let startValue = currentValue;
        let endValue = value;
        let frameDuration = 4000;
        let frames = 300;
        let increment = (endValue - startValue) / frames;
        let frameTime = frameDuration / frames;

        const animate = () => {
            if (Math.abs(endValue - startValue) > Math.abs(increment)) {
                startValue += increment;
                setCurrentValue(Math.round(startValue));
                requestAnimationFrame(animate);
            } else {
                setCurrentValue(endValue);
            }
        };

        animate();
    }, [value]);

    return (
        <h1 className={`odometer ${className}`}>{currentValue}{plus && ' +'}</h1>
    );
};

export default Odometer;
