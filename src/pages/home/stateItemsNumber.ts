export class StateItemsNumber {
  static number: string | null = null;
  static handleItemsNumber(number: string) {
    this.number = number;
  }
}
