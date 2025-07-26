

import { UseMutationResult } from "@tanstack/react-query";

interface BaseOsprojectsFormProps<T extends Record<string, any>> {
  mutation: UseMutationResult<any,Error,T,unknown>;
  row: T;
  afterSave?: () => void;
}
export function BaseOsprojectsForm<T extends Record<string, any>>(
  {}: BaseOsprojectsFormProps<T>,
) {
  return (
    <form>
      <h1>BaseOsprojectsForm</h1>
    </form>
  );
}
 
 