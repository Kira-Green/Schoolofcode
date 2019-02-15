function filterOdd (num) {
    
    const sorted = num.sort(function (a, b) { return a - b })
        return sorted.filter(checknum);
        

    }
    function checknum(number) { if (number % 2 === 1) { return number } }

test("test 1 checking the filterOdd function works", () => {

const actual1 = filterOdd([3, 6, 64, 2, 9, 7, 23]);
const expected1 = [3, 7, 9, 23]

console.log(`actual result from filterOdd: `, actual1)
expect(actual1).toBe(expected1)

})

test("test 2 checking the filterOdd function works", () => {

    const actual2 = filterOdd([6, 8, 2, 24, 62, 88]
);
    const expected2 = []

    console.log(`actual result from filterOdd: `, actual2)
    expect(actual2).toBe(expected2)

})

test("test 3 checking the filterOdd function works", () => {

    const actual3 = filterOdd([]);
    const expected3 = [];

    console.log(`actual result from filterOdd: `, actual3)
    expect(actual3).toBe(expected3)

})

test("test 4 checking the filterOdd function works", () => {

    const actual4 = filterOdd([7, 11, 91, 13, 3]);
    const expected4 = [3, 7, 11, 13, 91];


    console.log(`actual result from filterOdd: `, actual4)
    expect(actual4).toBe(expected4)

})

test("test 5 checking the filterOdd function works", () => {

    const actual5 = filterOdd([3, 6, 9, 0, 31, 24]);
    const expected5 = [3, 9, 31];

    console.log(`actual result from filterOdd: `, actual5)
    expect(actual5).toBe(expected5)

})


function test(title, callBack) {
    try {
        callBack()
        console.log(`%c ✓ ${title}`, "color: green; font-size: 30px");      // %c means going to add some css
    } catch (error) {
        console.log(`%c  ${title}`, "color: red;font-size: 30px");
    }
}


function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected} `)
            }
        }
    }
}

