const arr = ['3', 25, 8, true, undefined]

const [num1, num2, num3] = arr;
console.log(num1, num2)


const obj = {
    name: 'Aliza Khan',
    age: '19',
    bioData : ['teen', 20, 'single']
}

//destructing Array from an Object
const {name : fullName, age, bioData: [key1, key2, key3]} = obj

console.log(fullName, age, key1,  key2, key3)