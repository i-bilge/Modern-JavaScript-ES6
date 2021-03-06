// Task 1: Introduction

console.log('Holla, ES6');





// ---------------------------------------------
// Task 2: Variables (let) and Scoping

var doggo = "Akita";
console.log(doggo);

//console.log(cate); //this time it s gonna give error. its hoisted, but in let & const u cannot use a variable before decoration reched.
let cate = "British Sgorthair"
console.log(cate);
cate = "TÃÂ¼rkish Angora" // we cannot redeclare it but wecan redefine it!
console.log(cate);
//scopes for variables: function and for loops with var its local scope. but with let and const its global scope




// Task 2: Execise 1: Fix the code to print 15

var age = 15;

for (let age = 1; age <= 10; age++) {
    console.log(age);
}

console.log(age); // Should print 15 instead of 10

// Task 2: Execise 2: Fix the code to print Jack Russell Terrier

let myDog = "Jack Russell Terrier";
let shortLeggies = true;

if (shortLeggies) {
    let myDog = "Welsh Corgie";
    console.log(myDog);
} else {
    let myDog = "Border Collie";
    console.log(myDog);
}

console.log(myDog); // Jack Russell Terrier

// ---------------------------------------------
// Task 3: Variables (const) and Immutability
let artist = "Van Gogh";
artist = "Goggin"
// u can not do it with const
const paintings = [
    "The Starry Night",
    "Th Night Cafe"
];
paintings.push("Irises")
console.log(paintings);
paintings[0] = "Almond Blossoms"
console.log(paintings); // this are ok.
//But if u try to "paintings = []" its gonna give error. Because values can modified but variable not.

// TASK 3: Exercise: Refactor the code to use let/const

var painter = {
    name: "Van Gogh",
    nationality: "Dutch",
    paintings: ["The Starry Night", "Irises", "Almond Blossoms"]
};

//Answer=> 
Object.freeze(painter);
Object.freeze(painter.paintings)
//painter.birthDate = "March 30, 1853";
//painter.paintings.push("Something");

console.log(painter); // Should print { name: 'Van Gogh', nationality: 'Dutch', paintings: [ 'The Starry Night', 'Irises', 'Almond Blossoms' ] }

// Factory Challange
function getSquaredValuesFactory(numbers) {
    var functions = [];

    for (let i=0; i<numbers.length; i++) {
        let number = numbers[i];
        var getSquaredValue = function() {
            return numbers*numbers;
        }
        functions.push(getSquaredValue);
    }
    return functions;
}
// ---------------------------------------------
// TASK 4: Destructuring
const recipe = {
    name: "Red Lentil Dahl",
    timeInMinutes: 30,
    ingredients: ["red lentils", "cumin", "turmeric"]
    }
    const name = recipe.name;
    const ingredients = recipe.ingredients
    //NOW WE CAN ALSO USE DEST. FOR THE SAME AIM. WITH SAME NAMES:
    const {name, ingredients} = recipe; //For giving different names:
    const {name: myName, ingredients: myIngredients} = recipe;
    
    console.log(recipe, name, ingredients);
    
    // Task 4: Exercise: Extract data with destructuring
    
    const ingredients = {
        tea: 'black',
        milk: 'soy',
        sweetener: 'honey',
        spices: ['ginger', 'cardamom', 'cinnamon', 'nutmeg']
    }
    
    // Destructure the parameters
    function prepareChai({tea, milk, spices, sweetener}) {
    
        console.log("Mix the " + tea + " tea " +
            "with the " + spices + " in a small pot. " + 
            "Add a cup of water and bring to boil. Boil for 2-3 min. " +
            "Add " + milk + " milk and " + sweetener + ". " + 
            "Simmer for 3 min. Serve masala chai hot or warm!");
    }
    
    prepareChai(ingredients);
    
    
    
    
    
    // ---------------------------------------------
    // TASK 5: Strings and Interpolation
    
    
    
    // TASK 5: Exercise: Refactor the code to use the ES6 String utility methods
    
    const country = "Bulgaria";
    const city = "Sofia";
    
    if (country.includes("Bulg")) {
        console.log("The country starts with Bulg");
    }
    
    if (city.startsWith("So") {
        console.log("The name starts with So");
    }
    
    if (city.endsWith("a")) {
        console.log("The name ends with a");
    }
    
    console.log(
        `The capital of ${country}` +
        ` is the city of ${city}`
    );
    
    
    
    // ---------------------------------------------
    // TASK 6: Arrow functions
    
    // TASK 6: Exercise: Filter out only the prime numbers from the array
    
    const isPrime = number => number % 2 === 0;
    const primeNumbers = [1, 2, 3, 4, 5, 6].filter(isPrime);
    console.log(primeNumbers);
    
    // ---------------------------------------------
    // TASK 7: Arrow functions and this
    
    // Task 7: Exercise
    
    function Translator() {
       this.phrase = "good day";
       this.englishBulgarianDictionary = {
           good: "ÃÂ´ÃÂ¾ÃÂ±ÃÂÃÂ",
           day: "ÃÂ´ÃÂµÃÂ½"
       }
    }
    
    Translator.prototype.getBulgarianPhrase = function() {
       return this.phrase
           .split(" ")
           .map((word) =>  this.englishBulgarianDictionary[word])
           .join(" ");
    }
     
    const translator = new Translator();
    console.log(translator.getBulgarianPhrase());
    