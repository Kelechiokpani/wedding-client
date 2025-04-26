import { useState } from "react";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues, Path, useWatch  } from "react-hook-form";
import { Eye, EyeOff, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import PasswordStrengthIndicator from "@/components/atoms/PasswordStrengthIndicator"

interface FormInputProps<TFieldValues extends FieldValues>  {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    label: string;
    placeholder?: string;
    className?: string;
    inputType?: "text" | "password";
    confirmPassword?: Path<TFieldValues>;
}

const FormInput = <TFieldValues extends FieldValues> ({
    control,
    name,
    label,
    placeholder,
    className = "",
    inputType = "text",
    confirmPassword,
}: FormInputProps<TFieldValues>) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");
    
    const passwordToMatch = useWatch({
        control,
        name: confirmPassword || ("" as Path<TFieldValues>), 
    });
    const isPasswordMatched = confirmPassword
        ? inputValue === passwordToMatch && inputValue.length > 0
        : false;

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={className}>
                    <FormLabel className="form-label">{label}</FormLabel>
                    <FormControl>
                        <div className="relative">
                            <Input
                                {...field}
                                type={
                                    inputType === "password" && !showPassword
                                        ? "password"
                                        : "text"
                                }
                                className="form-input"
                                placeholder={placeholder}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                onChange={(e) => {
                                    field.onChange(e);
                                    setInputValue(e.target.value);
                                }}
                            />
                            {inputType === "password" && (
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-darkgray"
                                    onClick={() =>
                                        setShowPassword((prev) => !prev)
                                    }
                                >
                                    {showPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            )}
                        </div>
                    </FormControl>
                    <FormMessage />
                    
                    {inputType === "password" &&
                        !confirmPassword &&
                        (isFocused || inputValue.length > 0) && (
                            <PasswordStrengthIndicator password={inputValue} />
                        )}

                    {confirmPassword && inputValue.length > 0 && (
                        <div
                            className={cn(
                                "mt-2 flex items-center gap-2 text-sm",
                                isPasswordMatched
                                    ? "text-green-600"
                                    : "text-red-500"
                            )}
                        >
                            <CheckCircle
                                size={16}
                                className={cn(
                                    "stroke-2",
                                    isPasswordMatched
                                        ? "text-green-600"
                                        : "text-red-500"
                                )}
                            />
                            {isPasswordMatched
                                ? "Passwords match"
                                : "Passwords do not match"}
                        </div>
                    )}
                </FormItem>
            )}
        />
    );
};

export default FormInput;
