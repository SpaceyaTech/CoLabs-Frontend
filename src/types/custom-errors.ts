export class FormValidationError extends Error {
  constructor(message: string, errors: Record<string, string[]>) {
    super(message);
    this.name = "FormValidationError";
    this.errors = errors;
  }

  errors: Record<string, string[]>;
}

// Example usage:

// const formErrors = {
//   firstName: ["First name is required"],
//   email: ["Invalid email format"],
// };

// throw new FormValidationError("Form submission failed.", formErrors);
