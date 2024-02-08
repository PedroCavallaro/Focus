import { InputHTMLAttributes, forwardRef } from "react";
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    errors?: string;
};

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        { name = "", type = "text", className = "", label, errors, ...props },
        ref
    ) => {
        return (
            <>
                <input
                    className="border-b-main border-black outline-none"
                    name={name}
                    type={type}
                    ref={ref}
                    {...props}
                />
                {errors && <span>{errors}</span>}
            </>
        );
    }
);
