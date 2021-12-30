export default function xmxn(string) {
    if (typeof string !== "string") throw new TypeError("xmxn needs a string!");
    return string.toUpperCase();
  };