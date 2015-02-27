var My = (function () {

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
    };

    var hexToDec = function (num) {
        return num.split('').reverse().map(function (h, i) {
            return dec[h] * Math.pow(16, i);
        }).reduce(function (p, c) {
            return p + c;
        });
    }

    var hexToDecNoFairYouCheated = function (num) {
        return parseInt(num, 16);
    }

    // beef
    // 11 * 16^3 + 14 * 16^2 + 14 * 16^1 + 15 * 16^0

    var hexToDecOldSchool = function (num) {
        var hex = num.split('').reverse();
        var res = 0;
        for (var i = 0; i < hex.length; i++) {
            res += dec[hex[i]] * Math.pow(16, i);
        }
        return res;
    }

    return {
        hexToDec: hexToDec,
        hexToDecNoFairYouCheated: hexToDecNoFairYouCheated,
        hexToDecOldSchool: hexToDecOldSchool
    };
}());