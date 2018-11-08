 "use strict";

const fs = require("fs");
const stream = require("stream");

class StrTransform extends stream.Transform {
  constructor () {
    super({objectMode: true});
  }
  _transform (chunk, encoding, callback) {
    let res = chunk.replace(/\s+/g, "").toLowerCase();
    this.push(res);
    callback();
  }
}

let writableStream = fs.createWriteStream("./output.txt");
let readableStream = fs.createReadStream("./input.txt", "utf8");
let transfomStream = new StrTransform();

readableStream.pipe(transfomStream).pipe(writableStream);
