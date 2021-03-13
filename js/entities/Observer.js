export class Observer {
  constructor() {
    this.handlers = [];
  }
  subscribe(fn) {
    this.handlers.push(fn);
  }

  unsubscribe(fn) {
    this.handlers = this.handlers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
  }

  notify(o, thisObj) {
    var scope = thisObj || window;
    this.handlers.forEach(function (item) {
      item.call(scope, o);
    });
  }
}
