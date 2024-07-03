function outerFunction(param) {
    let outerVariable = "I'm an outer variable";

    function innerFunction() {
        console.log("Outer parameter: " + param);
        console.log("Outer variable: " + outerVariable);
    }

    return innerFunction;
}

const inner = outerFunction("Hello, world!");
inner(); // This will log the outer parameter and the outer variable
