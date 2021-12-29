// this is a generator function that by executing the following command would generate a new ID,
// this makes an infinite non-blocking loop because it only generate one ID at the time
// the command you need to execute is generateObj.next() over and over, each time it generate one ID

function* generateId() {
    let id = 1;

    while (true) {
        yield id;
        id++;
    }
}

const generateObj = generateId();
//console.log(generateObj.next()); //prints 1
//console.log(generateObj.next()); //prints 2
//console.log(generateObj.next()); //prints 3
//console.log(generateObj.next()); //prints 4

//to generate a new set of ID just you need to define a new variable:
//const generateObject2 = generateId();
//console.log(generateObject2.next()); //prints 1
//console.log(generateObject2.next()); //prints 2
//console.log(generateObject2.next()); //prints 3...