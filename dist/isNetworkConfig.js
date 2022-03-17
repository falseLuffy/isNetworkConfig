(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.OneSocket = {}));
})(this, (function (exports) { 'use strict';

  function IPV42Decimal (ipv4) {
    const aIPsec = ipv4.split('.');
    for (let i = 0; i < 4; i++) {
      if (parseInt(aIPsec[i]) < 16) {
        aIPsec[i] = '0' + parseInt(aIPsec[i]).toString(16);
      } else {
        aIPsec[i] = parseInt(aIPsec[i]).toString(16);
      }
    }
    const nIPaddr = parseInt('0x' + aIPsec[0] + aIPsec[1] + aIPsec[2] + aIPsec[3]);
    return nIPaddr
  }

  function isNetworkConfig(ip, mask, gw) {
    if (ip === gw || ip === mask || mask === gw) {
      return false; // 3个地址不能相同
    }

    var IPNumber = IPV42Decimal(ip);
    var maskNumber = IPV42Decimal(mask);
    var gatwayNumber = IPV42Decimal(gw);
    return (IPNumber & maskNumber) === (maskNumber & gatwayNumber);
  }

  exports.isNetworkConfig = isNetworkConfig;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
