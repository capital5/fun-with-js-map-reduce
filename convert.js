var My = (function () {
    'use strict';

    var dec = {
            '0': 0,
            '1': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            'a': 10,
            'A': 10,
            'b': 11,
            'B': 11,
            'c': 12,
            'C': 12,
            'd': 13,
            'D': 13,
            'e': 14,
            'E': 14,
            'f': 15,
            'F': 15
        },

        /**
         * Converts a number in hexidecmal format to a number in decimal format using map and reduce Array methods.
         * @param {String} number hexidecimal number
         * @return {Number} decimal number
         */
        hexToDec = function (number) {
            return number.split('').reverse().map(function (h, i) {
                return dec[h] * Math.pow(16, i);
            }).reduce(function (p, c) {
                return p + c;
            });
        },

        /**
         * Converts a number in hexidecmal format to a number in decimal format using the built-in JavaScript parseInt function.
         * @param {String} number hexidecimal number
         * @return {Number} decimal number
         */
        hexToDecNoFairYouCheated = function (number) {
            return parseInt(number, 16);
        },

        /**
         * Converts a number in hexidecmal format to a number in decimal format.
         * @param {String} number hexidecimal number
         * @return {Number} decimal number
         */
        hexToDecOldSchool = function (number) {
            var hex = number.split('').reverse(),
                res = 0,
                i;
            for (i = 0; i < hex.length; i += 1) {
                res += dec[hex[i]] * Math.pow(16, i);
            }
            return res;
        };

    return {
        hexToDec: hexToDec,
        hexToDecNoFairYouCheated: hexToDecNoFairYouCheated,
        hexToDecOldSchool: hexToDecOldSchool
    };
}());