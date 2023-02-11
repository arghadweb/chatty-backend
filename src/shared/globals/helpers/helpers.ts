export class Helpers {
  static firstLetterUppercase(str: string): string {
    const valueString = str.toLowerCase();

    return valueString.split(' ').map((value) => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
  }

  static lowerCase(str: string): string {
    return str.toLowerCase();
  }

  static generateRandomIntegers(integerLength: number): number {
    const characters = '0123456789';
    let result = '';
    for (let i = 0; i < integerLength; i += 1) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return parseInt(result, 10);
  }
}
