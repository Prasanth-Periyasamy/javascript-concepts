// Parse int converts string to number(integer)
// returns a integer though we have given value like 40.00 , it changes to 40
// syntax : parseInt(value,radix);
// If radix is omitted, JavaScript assumes radix 10. If the value begins with "0x", JavaScript assumes radix 16.
// If the first character cannot be converted, NaN is returned.
// Leading and trailing spaces are ignored.
// Only the first integer found is returned.

console.log(parseInt("10"));
console.log(parseInt("10.00"));
console.log(parseInt("10.00"));
console.log(parseInt("10.33"));
console.log(parseInt("34 45 66"));
console.log(parseInt("   60   "));
console.log(parseInt("40 years"));
console.log(parseInt("He was 40"));
console.log(parseInt("10", 10));
console.log(parseInt("010"));
console.log(parseInt("10", 8));
console.log(parseInt("0x10"));
console.log(parseInt("10", 16));
