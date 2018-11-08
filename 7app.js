 "use strict";

const stream = require("stream");

class StreamStr extends stream.Readable {
  constructor(str) {
    super ({objectMode: true});
    this._str = str;
  }
  _read() {
    this.push(this._str);
    this.push(null);
  }
}

class ConsoleWriter extends stream.Writable {
  constructor() {
    super({objectMode: true});
  }
  _write(chunk, encoding, callback) {
    console.log(chunk);
    callback();
  }
}

class StrTransform extends stream.Transform {
  constructor() {
    super({objectMode: true});
  }
  _transform(chunk, encoding, callback) {
    let res = chunk.toLowerCase().replace(/\s/g, "");
    this.push(res);
    callback();
  }
}

let rs = new StreamStr("ghjk GHJ hjk");
let cw = new ConsoleWriter();
let st = new StrTransform();

rs.pipe(st).pipe(cw);
