function rndNumber() {
    let rand = 0 - 0.5 + Math.random() * (20 - 0 + 1);
    return Math.round(rand);
}
let promise = new Promise((resolve, reject) => {
    let numbr = rndNumber();
    if (numbr > 10) {
        setTimeout(() => resolve(numbr), 3000)
    } else {
        setTimeout(() => reject(numbr), 3000)
    }

})

promise.then(
    result => console.log("Fulfilled: " + result),
    error => console.log("Rejected: " + error));


function promResponse(ms) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('true'), ms)
    })
    return promise.then(result => {
        console.log(result)

    })

}


promResponse(5000);