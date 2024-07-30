// function getData(callback) { // callback function - iske through kisi function ko kisi doosre function mein as a parameter call kr skte hai.
//     console.log("Getting Data...");
//     callback();
// }

// function printData() {
//     console.log("Data Printed!");
// }

// getData(printData);

function person(cb) { // "callback" ke jagah kuch bhi likh skte hai.
    console.log("This is Depika");
    cb();
}

function name() {
    console.log("Depika Gupta");
}

person(name);