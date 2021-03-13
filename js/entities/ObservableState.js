import { Observer } from "./Observer";

export class ObservableState {
  constructor(initialState) {
    this.prevState = null;
    this.state = initialState;
    this.observer = new Observer();
  }

  subscribe(fn) {
    this.observer.subscribe(fn.bind(this));
  }

  set(newState) {
    this.prevState = this.state;
    this.state = newState;
    this.observer.notify(this.state, this);
  }
}
