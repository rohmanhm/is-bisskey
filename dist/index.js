"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check wether bisskey code is valid bisskey code or not
 *
 * @param bisskey {string} bisskey code
 */
exports.check = function (bisskey) {
    /**
     * Bisskey code is contain 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
     */
    var bissKeyRe = /^[0-9a-fA-F]{16}$/;
    return bissKeyRe.test(bisskey);
};
exports.default = exports.check;
//# sourceMappingURL=index.js.map