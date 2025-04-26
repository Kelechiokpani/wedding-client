import { Control, FieldValues, Path } from "react-hook-form";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { CountryCode, E164Number } from "libphonenumber-js/core";

interface FormPhoneInputProps<TFieldValues extends FieldValues> {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    label: string;
    placeholder?: string;
    className?: string;
    defaultCountry?: CountryCode;
}

const FormPhoneNumber = <TFieldValues extends FieldValues>({
    control,
    name,
    label,
    placeholder,
    className = "",
    defaultCountry = "NG",
}: FormPhoneInputProps<TFieldValues>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={className}>
                    <FormLabel className="form-label">{label}</FormLabel>
                    <FormControl>
                        <PhoneInput
                            {...field}
                            defaultCountry={defaultCountry}
                            international
                            withCountryCallingCode
                            placeholder={placeholder}
                            value={field.value as E164Number | undefined}
                            onChange={field.onChange}
                            className="form-phone-input border-0 focus:outline-none"
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FormPhoneNumber;
