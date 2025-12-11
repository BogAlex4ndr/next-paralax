import { RefObject, useEffect, useState } from 'react';
import { easeInOut, useScroll, useTransform } from 'framer-motion';

export const useSectionAnimations = (scrollContainerRef: RefObject<HTMLDivElement | null>) => {
    const [size, setSize] = useState<'mobile' | 'tablet' | 'desktop' | 'laptop' | 'laptop_s'>('desktop');

    const { scrollY } = useScroll({
        container: scrollContainerRef,
    });

    useEffect(() => {
        const check = () => {
            const w = window.innerWidth;

            if (w <= 640) setSize('mobile');
            else if (w <= 1024) setSize('tablet');
            else if (w <= 1280) setSize('laptop_s');
            else if (w <= 1450) setSize('laptop');
            else setSize('desktop');
        };

        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // ---------- FONT SIZE LOGIC ----------
    const fontSizeMap = {
        mobile: ["28px", "26px"],
        tablet: ["54px", "52px"],
        laptop_s: ["62px", "60px"],
        laptop: ["82px", "80px"],
        desktop: ["128px", "124px"]
    };

    const animatedFontSize = useTransform(
        scrollY,
        [0, 300],
        fontSizeMap[size],
        { ease: easeInOut }
    );

    // ---------- GRADIENT ----------
    const animatedGradient = useTransform(
        scrollY,
        [0, 300],
        [
            "linear-gradient(150deg, #B53EA4 -10%, #FC6F32 39%, #FF4A59 90%)",
            "linear-gradient(150deg, #FFD6F9 -10%, #FFCBB4 39%, #FFBEC3 90%)"
        ],
        { ease: easeInOut }
    );

    // ---------- TITLE Y OFFSET ----------
    const yMap = {
        mobile: 60,
        tablet: 140,
        laptop_s: 180,
        laptop: 215,
        desktop: 250
    };

    const animatedY = useTransform(
        scrollY,
        [0, 500],
        [0, yMap[size as keyof typeof yMap] || 215],
        { ease: easeInOut }
    );
    // ---------- MOTION VARIANTS ----------
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.25 },
        },
    };

    const yItemMap = {
        mobile: -10,
        tablet: -160,
        laptop_s: -120,
        laptop: -160,
        desktop: -200
    };

    const item = {
        hidden: { opacity: 0, y: 1200 },
        show: {
            opacity: 1,
            y: yItemMap[size as keyof typeof yItemMap] || -200,
            transition: {
                duration: 0.6,
                ease: easeInOut,
            },
        },
    };

    return {
        size,
        animatedGradient,
        animatedFontSize,
        animatedY,
        container,
        item,
    };
};
