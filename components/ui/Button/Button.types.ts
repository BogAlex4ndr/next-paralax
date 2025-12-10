import { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "outline" | "text";
export type ButtonSize = "md" | "lg";


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    className?: string;

}
