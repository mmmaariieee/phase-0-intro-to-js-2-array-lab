// Write your solution here!
const  cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat) {
    cats.push(cat);
}

function destructivelyPrependCat(cat) {
    cats.unshift(cat);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function  destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(cat) {
    const newCats = [...cats, cat];
    return newCats;
}

function prependCat(cat) {
    const newCats = [cat, ...cats];
    return newCats;
}

function removeLastCat() {
    const copyOfCats = cats.slice(0, cats.length - 1);
    return copyOfCats;
}

function removeFirstCat() {
    const copyOfCats = cats.slice(1);
    return copyOfCats;
}

