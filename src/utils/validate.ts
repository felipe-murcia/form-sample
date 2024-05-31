import { ValidationRule } from "./FormValidator";
 
export class Validator {

  public required(message: string = 'Este campo es requerido'): ValidationRule {
    return (value) => (value ? null : message);
  }

  public minLength(length: number, message: string = `Debe tener al menos ${length} caracteres`): ValidationRule {
    return (value) => (value && value.length >= length ? null : message);
  }

  public maxLength(length: number, message: string = `Debe tener no más de ${length} caracteres`): ValidationRule {
    return (value) => (value && value.length <= length ? null : message);
  }

  public email(message: string = 'Correo electrónico no válido'): ValidationRule {
    return (value) => (value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : message);
  }

  public match(field: string, getFieldValue: (field: string) => any, message: string = 'Los campos no coinciden'): ValidationRule {
    return (value) => (value === getFieldValue(field) ? null : message);
  }

  public pattern(regex: RegExp, message: string = 'Formato no válido'): ValidationRule {
    return (value) => (value && regex.test(this.cleanWhiteSpaces(value)) ? null : message);
  }

  private cleanWhiteSpaces(cadena: string): string {
    return cadena.replace(/\s/g, '');
  }
}