interface OptionalTextFieldsProps {
  value?: string;
  children: React.ReactNode;
}

export function OptionalTextFields({
  value,
  children,
}: OptionalTextFieldsProps) {
  if (!value) return null;
  if (value.length === 0) return null;
  return children;
}
