/* tslint:disable */
const pako = require('pako');

// https://gist.github.com/oeon/0ada0457194ebf70ec2428900ba76255
function a2b(a: any) {
  let b,
    c,
    d,
    e: any = {},
    f = 0,
    g = 0,
    h = '',
    i = String.fromCharCode,
    j = a.length;
  for (b = 0; 64 > b; b++) {
    e[
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
        b
      )
    ] = b;
  }
  for (c = 0; j > c; c++) {
    for (b = e[a.charAt(c)], f = (f << 6) + b, g += 6; g >= 8; ) {
      ((d = 255 & (f >>> (g -= 8))) || j - 2 > c) && (h += i(d));
    }
  }
  return h;
}
/* tslint:enable */

const decode = (build: string) => {
  const substitutedBuild = build.replace(/-/gm, '+').replace(/_/gm, '/');

  // Convert encoded build into binary string
  const binaryBuild = a2b(substitutedBuild);

  // Convert binary string to character-number array
  const charData = binaryBuild.split('').map(x => {
    return x.charCodeAt(0);
  });

  // Convert number array into byte-array
  const binData = new Uint8Array(charData);

  let inflatedBuild;
  try {
    inflatedBuild = pako.inflate(binData, { to: 'string' });
  } catch (e) {
    throw e;
  }

  return inflatedBuild;
};

// const build = decode(exampleBuild);
// let oParser = new DOMParser();
// let oDOM = oParser.parseFromString(build, 'application/xml');
// // print the name of the root element or error message
// console.log(
//   oDOM.documentElement.nodeName == 'parsererror'
//     ? 'error while parsing'
//     : oDOM.documentElement.nodeName,
// );

export default decode;
