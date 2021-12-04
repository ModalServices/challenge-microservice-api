export class ValidatorMessage {
  static empty(field: string) {
    return `${field} não pode estar vazio`;
  }

  static number(field: string) {
    return `${field} deve ser um número`;
  }

  static integer(field: string) {
    return `${field} deve ser um inteiro`;
  }

  static array(field: string) {
    return `${field} deve ser um array`;
  }

  static string(field: string) {
    return `${field} deve ser uma string`;
  }

  static emptyObject(field: string) {
    return `${field} não pode ser um objeto vazio`;
  }

  static emptyList(field: string) {
    return `${field} não pode ser uma lista vazio`;
  }

  static maxSize(field: string, size: number) {
    return `${field} deve ter no máximo ${size} caracteres`;
  }

  static moreOrEqualTo(field: string, size: number) {
    return `${field} deve ser maior ou igual a ${size}`;
  }

  static lessOrEqualTo(field: string, size: number) {
    return `${field} deve ser menor ou igual a ${size}`;
  }

  static boolean(field: string) {
    return `${field} deve ser um boolean`;
  }
}
