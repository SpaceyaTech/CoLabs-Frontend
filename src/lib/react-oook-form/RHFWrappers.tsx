import { getNestedProperty, PossibleNestedUnions } from "@/utils/object";
import { FieldError, UseFormReturn } from "react-hook-form";

type ExtractFormType<T> =
  T extends UseFormReturn<infer U, any, undefined> ? U : never;


interface RHFErrorWrapperProps<T extends UseFormReturn<any, any, undefined>> {
  fieldKey: PossibleNestedUnions<ExtractFormType<T>>;
  form: T;
}

export function RHFErrorWrapper<T extends UseFormReturn<any, any, undefined>>({
  fieldKey,
  form,
}: RHFErrorWrapperProps<T>) {
  const nestedKeys = fieldKey.split(".");
  if (nestedKeys.length > 1) {
    const errorObject = getNestedProperty<FieldError>(form?.formState?.errors, fieldKey);
    return (
      <div className="text-sm italic text-error-content">
        <div className="text-sm italic text-error-content">
          {errorObject?.message}
        </div>
      </div>
    );
  }
  const errorObject = form?.formState?.errors?.[fieldKey];
  if (!errorObject) return null;
  if (typeof errorObject?.message === "string") {
    return (
      <div className="text-sm italic text-error-content">
        {errorObject?.message}
      </div>
    );
  }
  if (typeof errorObject === "object") {
    return (
      <div className="text-sm italic text-error-content">
        {Object.values(errorObject).join(", \n ")}
      </div>
    );
  }
}
