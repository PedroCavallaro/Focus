import { InputHTMLAttributes, forwardRef } from "react";

type FloatingLabelProps = InputHTMLAttributes<HTMLInputElement> & {
    inputType: string;
    label: string;
    errors?: string;
};

// eslint-disable-next-line react/display-name
export const FloatingLabelInput = forwardRef<
    HTMLInputElement,
    FloatingLabelProps
>(({ inputType, label, errors, ...props }, ref) => {
    return (
        <div className="mb-4">
            <div className="relative z-0 w-full mb-4 group">
                <input
                    type={inputType}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    ref={ref}
                    {...props}
                />
                <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    {label}
                </label>
                {errors && (
                    <span className="text-red-500 dark:text-red-400 text-sm">
                        {errors}
                    </span>
                )}
            </div>
        </div>
    );
});
