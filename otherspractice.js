const namesArray = ["John", "Jane", "Jim", "Jill", "David", "Jessica", "Mike", "Michelle", "Ryan", "Ashley", 1, 3, 7];

const numbersInArray = namesArray.filter((item) => item.toString().startsWith("J"));

const newNamesArray = [];

const reversedArray = namesArray.map((item, index) => {
    const newItem = item.toString().split("").reverse().join("");
    newNamesArray.push(newItem);
});

let myPromise = new Promise((resolve, reject) => {
    if (reversedArray !== null) {
        resolve("Success")
        console.log(newNamesArray)
    } else {
        reject("Failed")
    }
})

myPromise
.then((message) => {
    console.log(message)
})
.catch((error) => {
    console.log(error)
})