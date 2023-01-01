//Basic Function

let x = myFunction(3,4);

function myFunction(x,y){
    var sum = x + y;
    return sum;
}

console.log(`The value of X is ` + x);

//Using just funtions with objects

function myOtherFunction(users){
     console.log(`Hey, it is users - ` + users.name);
}

const namers = {
    name: "Som",
    Year: "1820"
}

//Calling the function
myOtherFunction(namers);

//Using Functions within a Variable

let oy = function (p,s){
    var sum = p*s;
    console.log(sum);
}

//Calling the function
oy(10,2);

//Using Arrow Function with the latest ES7

const okitsnotfunction = (users) => {
    console.log(`Hey, it is users in the ES7 function - ` + users.name + ` year ` + users.Year);
};

//Calling the function
okitsnotfunction(namers);


