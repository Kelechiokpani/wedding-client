import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface PasswordStrengthIndicatorProps {
    password: string;
}

const PasswordStrengthIndicator = ({
    password,
}: PasswordStrengthIndicatorProps) => {
    const passwordChecks = [
        {
            label: "At least one uppercase letter",
            isValid: /[A-Z]/.test(password),
        },
        {
            label: "At least one number",
            isValid: /\d/.test(password),
        },
        {
            label: "At least 8 characters",
            isValid: password.length >= 8,
        },
        {
            label: "At least one special character",
            isValid: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        },
    ];

    const strength = passwordChecks.filter((check) => check.isValid).length;

    return (
        <div className="mt-2 space-y-2">
            <div className="flex space-x-2">
                {[...Array(4)].map((_, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            "h-1 flex-1 rounded",
                            strength > idx ? "bg-green-500" : "bg-red-500"
                        )}
                    />
                ))}
            </div>

            <div className="text-sm text-gray-600">
                <p className="mb-1 font-medium text-red-500">
                    Weak password, must contain:
                </p>
                <ul className="space-y-1">
                    {passwordChecks.map((check, idx) => (
                        <li
                            key={idx}
                            className={cn(
                                "flex items-center gap-2",
                                check.isValid
                                    ? "text-green-600"
                                    : "text-red-500"
                            )}
                        >
                            <CheckCircle
                                size={16}
                                className={cn(
                                    "stroke-2",
                                    check.isValid
                                        ? "text-green-600"
                                        : "text-red-500"
                                )}
                            />
                            {check.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PasswordStrengthIndicator;
