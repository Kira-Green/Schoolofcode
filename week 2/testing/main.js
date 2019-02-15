const sum  = (x, y) => x - y;   //error on purpose to test : 
const subtract = (x, y) => x - y;

test ("checking the sum function works", () => {
    const actual = sum (3, 4)
    const expected = 7
    console.log(`actual result from sum: `, actual)
    expect(actual).toBe(expected)

})

test ("checking the subtract function works", () => {

    const actualSub = subtract(3, 4)
    const expectedSub = -1
    console.log(`actual result from sub: `,actualSub)
    expect(actualSub).toBe(expectedSub) 

})
// if (actual !== expected) {
//     throw new Error(`${actual} is not equal to ${expected} `)
// }


// if (actualSub !== expectedSub) {                            // if there is error above this test doesn't get run
//     throw new Error(`${actualSub} is not equal to ${expectedSub} `)
// }                                                                so do below instead
                                                // and use a try catch
function test(title, callBack) {
    try {
            callBack()
        console.log(`%c ✓ ${title}`, "color: green; font-size: 30px");      // %c means going to add some css
    } catch (error ) {
        console.log(`%c  ${title}`, "color: red;font-size: 30px");    
    }
}


function expect(actual){
    return {
        toBe (expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected} `)
            }   
        }
    }
}
