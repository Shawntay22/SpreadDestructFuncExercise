// Spread & Destructuring with Functions Exercise


// 1a
const jPDinos = [
    "Velociraptors",
    "Tyrannosaurus Rex",
    "Dilophosaurus"
];

// 1b
function seeDinos(i, ...j){
    console.log(i);
    console.log(j);
}

//seeDinos ('Velociraptors', 'Tyrannosaurus Rex', 'Dilophosaurus');

// OR
seeDinos(...jPDinos);

console.log(`=`.repeat(25));

// 2a
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcom: "Jeff Goldblum"
};

// 2b 
seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
}
seeCharacters(jPCharacters);

console.log(`=`.repeat(25));

// Bonus
// 3a 

const jurassicParkMovies = [
    {
        one: "Jurassic Park", 
        two: "The Lost World: Jurassic Park", 
        three: "Jurassic Park III" 
    },
    {
        four: "Jurassic World", 
        five: "Jurassic World: Fallen Kingdom", 
        six: "Jurassic World: Dominion"
    }
];

// 3b
// function seeJPMovies ([{one, two, three}, {four, five, six}]){
//     console.log(one);
//     console.log(two);
//     console.log(three);
//     console.log(four);
//     console.log(five);
//     console.log(six);
// }

// seeJPMovies(jurassicMovies)

seeJPMovies = ({one, two, three}, {four, five, six}) => {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}

seeJPMovies(...jurassicParkMovies)

