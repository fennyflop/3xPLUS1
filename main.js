// Based on this video - https://www.youtube.com/watch?v=094y1Z2wpJg&t=553s. It is very interesting

// Generator function fun :D
function* main(i) {
    while (i != 1) {
        if (i % 2 == 0) {
            i /= 2;
        } else {
            i = i*3+1;
        }
        yield i;
    }
}

// Insert any number
const obj = main(7);

// Simple loop
console.log("STARTED");
while (true) {
    let currentValue = obj.next().value;
    if (currentValue == 1) {
        console.log("FINISHED");
        break;
    }
    console.log(" -  " + currentValue);
    continue;
}