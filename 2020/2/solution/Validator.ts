export class Validator<T> {
  constructor(public data: T[], public validatorFunc: Function, public validEntries = 0) {}

  validate() {
    const validationResults = this.data.map(entry => {
      return this.validatorFunc(entry);
    });
    this.validEntries = validationResults.filter(Boolean).length;
  }

  get validItemsAmount() {
    return this.validEntries;
  }
}