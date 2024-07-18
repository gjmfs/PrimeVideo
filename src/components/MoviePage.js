import { clickButton } from './clickButton'; // Assuming files are in the same directory

class SecondClass {
    constructor() {
        const myInstance = new clickButton();
        this.receivedValue = myInstance.getValue(); // Access the value
    }
}




export const MoviePage = () => {

  return (
    <div className="container">
      <h1></h1>
    </div>
  );
};
