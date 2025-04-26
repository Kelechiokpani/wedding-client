import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
    SelectItem,
} from "@/components/ui/select";
import { Control, FieldValues, Path  } from "react-hook-form";

interface FormSelectProps<TFieldValues extends FieldValues> {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    label: string;
    placeholder?: string;
    className?: string;
    options?: { label: string; value: string }[]; // for auto-mapping
    children?: React.ReactNode; // for manual mapping
}

const FormSelect = <TFieldValues extends FieldValues> ({
    control,
    name,
    label,
    placeholder,
    className = "",
    options,
    children,
}: FormSelectProps<TFieldValues>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={className}>
                    <FormLabel className="form-label">{label}</FormLabel>
                    <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="form-select-trigger">
                                <SelectValue placeholder={field.value || placeholder} />
                            </SelectTrigger>
                            <SelectContent className="form-select-content">
                                {/* If options are provided, map them automatically */}
                                {options
                                    ? options.map((option) => (
                                          <SelectItem key={option.value} value={option.value}>
                                              {option.label}
                                          </SelectItem>
                                      ))
                                    : children} {/* Else, render children */}
                            </SelectContent>
                        </Select>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FormSelect;
