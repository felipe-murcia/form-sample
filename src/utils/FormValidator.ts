export type ValidationRule = (value: any) => string | null;

class FormValidator {
  private rules: { [field: string]: ValidationRule[] } = {};

  constructor() {}

  addRule(field: string, rule: ValidationRule) {
    if (!this.rules[field]) {
      this.rules[field] = [];
    }
    this.rules[field].push(rule);
  }

  validate(data: { [key: string]: any }): { [key: string]: string[] } {
    const errors: { [key: string]: string[] } = {};

    for (const field in this.rules) {
      const fieldErrors: string[] = [];
      const rules = this.rules[field];
      const value = data[field];

      for (const rule of rules) {
        const error = rule(value);
        if (error) {
          fieldErrors.push(error);
        }
      }

      if (fieldErrors.length > 0) {
        errors[field] = fieldErrors;
      }
    }

    return errors;
  }
}

export default FormValidator;
