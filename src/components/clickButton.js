import movie from "./movie";
export class clickButton {
  constructor(value) {
      this.value = movie[value];
  }

  getValue() {
      return this.value;
  }
}
