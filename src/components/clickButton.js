import movie from "./movie";
export class clickButton {
  constructor(id) {
      this.id = movie[id].id;
      console.log(this.id)
  }

  getValue() {
      return this.id;
  }
}
