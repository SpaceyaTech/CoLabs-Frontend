

import { UseMutationResult } from "@tanstack/react-query";

interface BaseProjectsFormProps<T extends Record<string, any>> {
  mutation: UseMutationResult<any,Error,T,unknown>;
  row: T;
  afterSave?: () => void;
}
export function BaseProjectsForm<T extends Record<string, any>>(
  {}: BaseProjectsFormProps<T>,
) {
  return (
    <form>
      <h1>BaseProjectsForm</h1>
    </form>
  );
}
 
 