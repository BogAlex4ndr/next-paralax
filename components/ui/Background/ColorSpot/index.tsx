// components/ColorSpot.js (Универсальный)

import React, { CSSProperties } from 'react';

interface ColorSpotProps {
    svgContent: string;
    width: number;
    height: number;
    viewBox: string;
    className?: string;
    style?: CSSProperties;
}

const ColorSpot: React.FC<ColorSpotProps> = ({
    svgContent,
    width,
    height,
    viewBox,
    className = "",
    style = {}
}) => {

    return (
        <svg
            className={`${className} pointer-events-none`}
            style={style}
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            dangerouslySetInnerHTML={{ __html: svgContent }}
        />
    );
};

export default ColorSpot;