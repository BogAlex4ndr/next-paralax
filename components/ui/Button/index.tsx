import React from 'react';
import { ButtonProps, ButtonSize, ButtonVariant } from './Button.types';

const Button: React.FC<ButtonProps> = ({
    children = "Button",
    variant = "outline",
    size = "md",
    disabled = false,
    className = "",
    ...props
}) => {
    const gradient = "linear-gradient(110deg, #963488 -20%, #FC6F32 50%, #FF4A59 120%)";

    const variants: Record<ButtonVariant, string> = {
        outline: `
      bg-transparent text-white
    `,
        text: `
      bg-transparent text-white
    `
    };

    const sizeClasses: Record<ButtonSize, string> = {
        md: ` ${variant === 'outline' && 'px-4 lg:px-8 lg:py-3 text-lg'}
        ${variant === 'text' && 'px-4 lg:px-6 lg:py-3 text-lg'}`,
        lg: ` ${variant === 'outline' && 'px-8 py-4 lg:px-12 lg:py-6 lg:text-2xl leading-none'}
        ${variant === 'text' && 'px-8 py-4 lg:px-14 lg:py-6 lg:text-2xl leading-none'}`
    };

    const baseClasses = `
    font-medium rounded-full transition-all duration-100 
    ${sizeClasses[size]} ${className}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `;



    if (variant === "outline") {
        return (
            <button
                {...props}
                disabled={disabled}
                className={`group relative overflow-hidden ${baseClasses} ${variants.outline}`}
                style={{
                    background: 'transparent'
                }}
            >
                <span className="relative z-10">{children}</span>
                <div
                    className="absolute inset-0 rounded-full pointer-events-none "
                    style={{
                        padding: '2px',
                        background: gradient,
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude'
                    }}
                />
                {!disabled && (
                    <div
                        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{ background: gradient }}
                    />
                )}
            </button>
        );
    }

    if (variant === "text") {
        return (
            <button
                {...props}
                disabled={disabled}
                className={baseClasses + variants.text}
            >
                <span
                    className={`transition-all duration-100 ${!disabled && 'hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(110deg,#963488_-20%,#FC6F32_50%,#FF4A59_120%)]'}`}
                >
                    {children}
                </span>
            </button>
        );
    }

    return null;
};

export default Button;