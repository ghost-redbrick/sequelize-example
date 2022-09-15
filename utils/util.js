var status = require("http-status");
var IPCIDR = require("ip-cidr");
const { Address4, Address6 } = require("ip-address");

function range2cidr(r) {
  const addr = Address4.fromBigInteger(r.begin).address;
  let diff = r.end - r.begin + 1;
  let bits = 32;
  while ((diff = Math.floor(diff / 2))) bits--;
  return addr + `/${bits}`;
}

function cidr2range(c) {
  if (!IPCIDR.isValidCIDR(c)) {
    return null;
  }
  const cidr = new IPCIDR(c);
  return {
    begin: cidr.start({ type: "bigInteger" }),
    end: cidr.end({ type: "bigInteger" }),
  };
}

module.exports = {
  range2cidr,
  cidr2range,
};
