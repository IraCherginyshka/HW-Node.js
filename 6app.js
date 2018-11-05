 "use strict";

const EventEmitter = require("events");

class Rabbit extends EventEmitter {
  constructor() {
    super()
    this._positionX = 0;
    this._positionY = 0;
  }

  chengePosition() {
    this._positionX = Math.random();
    this._positionY = Math.random();
    this.emit(nameEvent, `${this._positionX} / ${this._positionY}`);
  }
}

class Hunter {
  constructor() {
  }
  showPosition(data) {
    console.log(data);
  }
}

const r = new Rabbit ();
const h = new Hunter ();
let nameEvent = "rabbitPosition";
r.on(nameEvent, h.showPosition.bind(h));

r.chengePosition();
r.chengePosition();
