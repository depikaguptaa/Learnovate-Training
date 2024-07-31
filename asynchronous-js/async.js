function async(callback) {
    console.log("Getting Data...");
    setTimeout(() => {
        callback();
    }, 2000);

    setTimeout(() => {
        console.log("Data Printed!");
    }, 3000);
}

function getName() {
    console.log("Depika Gupta");
}

console.log("Hello");
async(getName);
console.log("Hello World!");