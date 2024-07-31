function async(callback) {
    console.log("Getting Data...");
    setTimeout(() => {
        callback();
    }, 1000);

    setTimeout(() => {
        console.log("Data Printed!");
    });
}

function getName() {
    console.log("Depika Gupta");
}

console.log("Hello");
async(getName);
console.log("Hello World!");