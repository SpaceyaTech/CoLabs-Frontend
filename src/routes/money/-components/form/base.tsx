

import { UseMutationResult } from "@tanstack/react-query";

interface BaseMoneyFormProps<T extends Record<string, any>> {
  mutation: UseMutationResult<any,Error,T,unknown>;
  row: T;
  afterSave?: () => void;
}
export function BaseMoneyForm<T extends Record<string, any>>(
  {}: BaseMoneyFormProps<T>,
) {
  return (
    <form>
      <h1>BaseMoneyForm</h1>
    </form>
  );
}
 
 