var a = 10;
var b = 5;
var c = 20;

/****** AND Operator (&&) ******/

if (a > b && a < c) {
    document.writeln("Example 1: AND operator is true<br>");
}

if (a == 10 && b == 5) {
    document.writeln("Example 2: AND operator is true<br>");
}

if (a > 5 && c > 15) {
    document.writeln("Example 3: AND operator is true<br>");
}

/****** OR Operator (||) ********/

if (a > b || a > c) {
    document.writeln("Example 4: OR operator is true<br>");
}

if (b > a || c > a) {
    document.writeln("Example 5: OR operator is true<br>");
}

if (a == 5 || b == 5) {
    document.writeln("Example 6: OR operator is true<br>");
}

/***** NOT Operator (!) ******/

if (!(a < b)) {
    document.writeln("Example 7: NOT operator is true<br>");
}

if (!(b > c)) {
    document.writeln("Example 8: NOT operator is true<br>");
}

if (!(a == 5)) {
    document.writeln("Example 9: NOT operator is true<br>");
}

if (!(c < a)) {
    document.writeln("Example 10: NOT operator is true<br>");
}
