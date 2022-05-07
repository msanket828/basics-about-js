
/* ----------------------------- normal function ---------------------------- */
function displayName(name) {
    console.log(name);
}

displayName('sanket');


/* ----------------------------- arrow function ----------------------------- */
const displayAge=(age)=> {
    console.log(age);
}

displayAge(28);


/* --------------------------------- classes -------------------------------- */
class Human {
    constructor() {
        this.gender='male'
    }
    printGender(){
        console.log('class inheritance '+this.gender);
    }
}
class Person extends Human {
    constructor(){
        super();
        this.name='sanket';
    }
    printMyName(){
        console.log('class '+this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();


/* ----------------------------- spread operator ---------------------------- */
const firstArray=[33,56,39,09];
const secondArray=[295,493,229,93,495,699];

console.log([...firstArray,...secondArray]);

const dev={
    name: 'sushil j'
}

const newPerson={
    ...dev,
    age: 28
}

console.log(newPerson.name,newPerson);


/* ------------------------------ rest operator ----------------------------- */

const mainFilter=(...args)=> {
    return args.filter(el => {
        return el % 2 ==0
    });
}

console.log(mainFilter(234,53,1,94));


/* ----------------------------- array functions ---------------------------- */
/* ---------------------------------- 1.map --------------------------------- */
//always generates new array instead of modifying old one
const sequence=[5,4,1,2,3];
const squareSequence=sequence.map((el)=> el*el);
console.log('default array => '+sequence);
console.log('square sequence => '+squareSequence);

/* -------------------------------- 2.filter -------------------------------- */
// return filtered new array

const newData=sequence.filter((el)=> el%2==0);
console.log('default array => '+sequence);
console.log('filtered array => '+newData);

/* --------------------------------- 3.sort --------------------------------- */
//return sorted array

const sortedArray=sequence.sort();
console.log('sortedArray => '+sortedArray);

/* -------------------------------- 4.forEach ------------------------------- */
//This method helps to loop over array by executing a provided callback function for each element in an array.

sortedArray.forEach(function(el){
    console.log(el+2);
})

/* -------------------------------- 5.concat -------------------------------- */
// used to merege two array
const arrayA=['sanket','aditya','aniket','reshma'];
const arrayB=['sushil','sanketp','priyanka']

const arrayC=arrayA.concat(arrayB);
console.log('Concated Array => '+arrayC);

/* ------------------------------- 6. every  || 7. some ------------------------------ */
//This method checks every element in the array that passes the condition, returning true or false as appropriate.
//opposite to every 

const greaterThan5=sequence.every(el=>el>5);
console.log('greterThan5 => '+greaterThan5);

/* ----------------------------  8. includes ---------------------------- */
//This method checks if an array includes the element that passes the condition, returning true or false as appropriate.
console.log('includes=>'+sequence.includes(1));

/* --------------------------------- 9. join -------------------------------- */
//This method returns a new string by concatenating all of the array’s elements separated by the specified separator.
let name='sanket';
name=name.split('');
console.log('split =>'+name);

let newname=name.join('');
console.log('join => '+newname);

/* ------------------------------- 10. reduce ------------------------------- */
//This method applies a function against an accumulator and each element in the array to reduce it to a single value.

const arr=[1,2,3,4,5];
const reduced=arr.reduce((total,current)=> total + current); //1,2=>3 //3,3=> 6 //6,4=>10 //10,5=>15
console.log(reduced);

/* -------------------------------- 11. find -------------------------------- */
//This method returns the value of the first element in an array that pass the test in a testing function.
const found=arr.find(el=>el>2);
console.log('find => '+found);

/* ------------------------------ 12. findIndex ----------------------------- */
//This method returns the index of the first element in an array that pass the test in a testing function.
const findIndex=arr.findIndex(el=>el==4);
console.log('findIndex => '+findIndex);

/* ------------------------------- 13. indexOf ------------------------------ */
//This method returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.

const indexOfFound=arr.indexOf(4);
console.log('indexOf => '+indexOfFound);

/* -------------------------------- 15. slice ------------------------------- */
//This method returns a new array with specified start to end elements.
const sliceArray=arr.slice(0,4);
console.log('sliceArry => '+sliceArray);

/* --------------------------------- 16.pop --------------------------------- */
//This method removes the last element from the end of array and returns that element.
const popBefore=[10,20,30,40,50];
const popAfter=popBefore.pop()
console.log('pop => '+popBefore);

/* ---------------------------------- shift --------------------------------- */
//This method removes the firt element from the start of array and return that element;
const shiftBefore=[10,20,30,40,50];
const shiftAfter=shiftBefore.shift();
console.log('shift =>'+shiftBefore);

/* --------------------------------- 17.push -------------------------------- */
//This method adds one or more elements to the end of array and returns the new length of the array.
const pushBefore=[10,20,30,40,50];
const pushAfter=pushBefore.push(60,70);
console.log('push => '+pushBefore);

/* --------------------------------- unshift -------------------------------- */
//This method add one or more elements to the start of array and return the length of the array
const unshiftBefore=[10,20,30,40,50];
const unshiftAfter=unshiftBefore.unshift(60,70);
console.log('unshift => '+unshiftBefore);