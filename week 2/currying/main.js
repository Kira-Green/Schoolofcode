//currying
//node v9.7.1 linux/amd64   online js compiler https://repl.it/@Kira_Green/TechnologicalPessimisticBooleanalgebra

function sum3(x, y, z) {
    return x + y + z;
}

let result = sum3(1, 2, 3)
console.log(result)

// if one of the numbers is always the same eg
console.log(sum3(10, 1, 2));
console.log(sum3(10, 3, 2));
console.log(sum3(10, 5, 7));

function sum2AndX(x) {
    return function(a, b) {
        return sum3(a, b, x);
    }
}

const sum2AndTen = sum2AndX(10)
console.log(sum2AndTen(3, 5))



//

function curriedsum3(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        };
    };
}

let curryresult = curriedsum3(1)(2)(5)
console.log(curryresult)

const alwaysAdd10 = curriedsum3(10)
let added10 = alwaysAdd10(1)(3)
console.log(added10)

//another example

function getLettersAsLower(start, length, string){
    return string.substr(start, length).toLowerCase()
}
getLettersAsLower(0, 4, "KiraGreen")

function curriedGetLettersAsLower(start) {
    return function (length) {
        return function (string) {
            return string.substr(start, length).toLowerCase()
        }
    }
}

let startAtFirstLetter = curriedGetLettersAsLower(0)
let startAnd10Letter = startAtFirstLetter(10)
console.log(startAnd10Letter("hello, I like curry"))