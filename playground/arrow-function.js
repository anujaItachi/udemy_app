var square = x => x * x;
// {
//     var result = (x * x);
//     return result;
// };
console.log(square(9));

var user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I am ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I am ${this.name}`);
    }
};
user.sayHi(1,2,3);