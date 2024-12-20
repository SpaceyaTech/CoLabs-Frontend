import { getNestedProperty, PossibleNestedUnions } from "@/utils/object";
import { Controller, FieldError, UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RHFErrorWrapper } from "./RHFWrappers";
import { twMerge } from "tailwind-merge";
type ExtractFormType<T> =
  T extends UseFormReturn<infer U, any, undefined> ? U : never;

interface RHFTextInputProps<T extends UseFormReturn<any, any, undefined>> {
  fieldKey: PossibleNestedUnions<ExtractFormType<T>>;
  form: T;
  placeholder: string;
  label?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  containerClassName?: string;
  labelClassName?: string;
}

export function RHFTextInput<T extends UseFormReturn<any, any, undefined>>({
  form,
  fieldKey,
  label,
  placeholder,
  inputProps,
  containerClassName,
  labelClassName,
}: RHFTextInputProps<T>) {
  const { control, register } = form;
  const fieldError = getNestedProperty<FieldError>(
    form?.formState?.errors,
    fieldKey,
  );
  return (
    <div className={twMerge("flex flex-col gap-1", containerClassName)}>
      {label && (
        <Label className={twMerge("inline-flex gap-1", labelClassName)}>
          {label}
        </Label>
      )}
      <Controller
        name={fieldKey}
        control={control}
        render={({ field }) => {
          return (
            <Input
              {...inputProps}
                {...field}
              className={twMerge(
                `w-full rounded border border-[#737776CC] bg-transparent ${fieldError?.message ? "border-4 border-error" : ""}`,
                inputProps?.className,
              )}
              placeholder={placeholder}
              {...register(fieldKey, { valueAsNumber: inputProps?.type === "number" })}
            />
          );
        }}
      />
      <RHFErrorWrapper form={form} fieldKey={fieldKey} />
    </div>
  );
}
