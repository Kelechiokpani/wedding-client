import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Control, FieldValues, Path } from "react-hook-form";

interface FormCheckboxProps<TFieldValues extends FieldValues> {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    label: React.ReactNode;
    className?: string;
}

const FormCheckbox = <TFieldValues extends FieldValues> ({
    control,
    name,
    label,
    className = "",
}: FormCheckboxProps<TFieldValues>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem
                    className={`flex items-center space-x-2 ${className}`}
                >
                    <FormControl>
                        <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="form-checkbox"
                        />
                    </FormControl>
                    <FormLabel className="form-checkbox-label leading-none">{label}</FormLabel>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FormCheckbox;
