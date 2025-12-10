// hooks/useAnimation.ts
import { useEffect, useState } from 'react';
import { easeOut, Variants } from 'framer-motion';

export const useAnimation = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };
        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 300 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.25,
                duration: 0.6,
                ease: easeOut,
            },
        },
    };

    const slideInVariants: Variants = {
        hidden: { opacity: 0, x: '20vw' },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: easeOut,
            }
        },
    };

    const slideInVariantsLg: Variants = {
        hidden: { opacity: 0, x: '20vw' },
        show: {
            opacity: 1,
            x: '-8vw',
            transition: {
                duration: 0.8,
                ease: easeOut,
            }
        },
    };

    return {
        isLargeScreen,
        containerVariants,
        slideInVariants,
        slideInVariantsLg,
        easeOut
    };
};