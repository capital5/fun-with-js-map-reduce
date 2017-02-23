# Fun With JavaScript Map Reduce
Practical JavaScript Map Reduce Example

## About
This little experiment is two-fold for me. On one hand I wanted to play around with the map and reduce Array methods. On the other hand I wanted to wrap my head around a newer unit testing framework called Venus.js.

So, I'll be coming at this TDD style in tutorial format.

## Getting Started
To map-reduce a set of data is to apply some operation to each data item in the set and then apply another operation to reduce the data set to a single result.

As it turns out a perfect example of where to apply such a method exists when converting a hexadecmial number to a decimal number.

**An example:**
Let's say we have the hexadeimcal number `0xBEEF`. In order to convert this into the decimal number `48879` we need to apply the following simple algorithm:

Hexadecimal numbers can be validated with this regex: `/^[0-9A-Fa-f]+$/g`

1. For each digit in the sequence we must 
2. translate the digit into the decimal version
3. multiply that digit by 16 raised to the power of its 0 based index in the sequence
4. add the result to an accumulator
5. repeat 2-5 until the end of the sequence

So you could cheat and use JavaScript's built-in `parseInt` function ...

```js
// either
var dec=parseInt('BEEF', 16);
// or
var dec=parseInt('0xBEEF');
// both work just fine
```

... , but that's no fun. Let's do it ourselves.

## Old School
We want to perform the following programatically:
```
0xBEEF: 11 * 16 ^ 3 + 14 * 16 ^ 2 + 14 * 16 ^ 1 + 15 * 16 ^ 0
```

```js
function hexToDecOldSchool(number){
	var digits = number.split('').reverse();
	var result = 0;
	for (var i = 0; i < hex.length; i++) {
		result += decimal[digits[i]] * Math.pow(16, i);
	}
	return result;
}
```

1. split the digits of `BEEF` into an array and reverse it to take advantage of the natural array index
2. iterate over each entry in the array and first translate the hex digit to its dec counterpart (map not shown), then mutiply by 16 raised to the natural index
3. return the result

## New School
```js
function hexToDec(number) {
	return number.split('').reverse().map(function (h, i) {
		return dec[h] * Math.pow(16, i);
	}).reduce(function (p, c) {
		return p + c;
	});
}
```

OK. What did we gain? You could argue not much, but I don't see it that way. Using map-reduced our implementation becomes quite fluent since we can chain all of our operations together. We don't have to keep track of the digits or create a separate accumulator, these things are done for us. The hex digit lookup becomes implicit instead of explicit and so does the incrementing of the index.

Arguably this is a trivial example, but starting this way eases the learning at least for me.

So, now that we have the algorithm written, we need to prove they work ...

## Prove It

JavaScript unit testing with Venus.js

```js
/**
 * @venus-library mocha
 * @venus-include ../convert.js
 * @venus-code ../convert.js
 */
describe('hexToDec', function () {

    it('should convert Beef in hex to 48879 in dec', function () {
        var result = My.hexToDec('Beef');
        expect(result).to.equal(48879);
    });

});
```

## Run The Tests
```bash
venus run -nct test/test.convert.js
```
