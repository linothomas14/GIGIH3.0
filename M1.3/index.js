function checkValid(number) {
    if ((number % 2) == 0) {
        throw Error("not valid number");
    }
}

try {
    checkValid(5);
    console.log("5 is valid number")
    checkValid(10);
    console.log("10 is valid number")
    checkValid(15);
    console.log("15 is valid number")
} catch (err) {
    console.log("number i not valid");
}