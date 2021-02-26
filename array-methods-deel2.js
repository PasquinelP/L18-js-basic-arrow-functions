// A Schrijf een JavaScript functie die een bepaald item weet te vinden en terug geeft op basis van een bepaalde value. Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman". Gebruik .find.

const superheroes = [
  {name: "Batman", alter_ego: "Bruce Wayne"}, 
  {name: "Superman", alter_ego: "Clark Kent"}, 
  {name: "Spiderman", alter_ego: "Peter Parker"}]
  
  // Hier komt jouw functie
  const findSpiderMan = (array) => {
    return array.find((arrayItem) => {
       return arrayItem.name === "Spiderman";
  });
};

  console.log(findSpiderMan(superheroes)) 
  // Find Spiderman
  // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


// B In een array met integers. Zorg dat je een array returned met de integers verdubbeld. Gebruik de .forEach method of, een level hoger: de .map method.

const doubleArrayValues = (array) => {
  let doubledArray = [];
  array.forEach((element) => {
    doubledArray.push(element * 2);
  });
  return doubledArray;
};

console.log(doubleArrayValues([1, 2, 3])); 
  // result should be [2, 4, 6]



// C In een array met integers. Schrijf een JavaScript functie die checkt of er een nummer (integer) in de array aanwezig is dat groter is dan 10.

const containsNumberBiggerThan10 = (array) => {
  return array.some((element) => {
    return element > 10
  });
}

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])); 
  // result should be true
console.log(containsNumberBiggerThan10([1,2,1,2,1,2]));
  // result should be false



// D In een array met strings. Schrijf een JavaScript functie die kijkt of er een bepaalde string: "Italy" in de array aanwezig is.

const isItalyInTheGreat7 = (array) => {
  return array.some((element) => {
    return element === "Italy";
  })
};


console.log(isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']));
  // result should be true


// E In een array met integers. Schrijf een JavaScript functie die elke integer vertienvoudigt. Gebruik .forEach.

const tenfold = (array) => {
  let result = [];
   array.forEach((element) => {
    result.push(element * 10);
  });
  return result;
}

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
  // result should be [10, 40, 30, 60, 90, 70, 110]


// F In een array met integers. Schrijf een JavaScript functie die checkt of alle waardes in de array onder de 100 zijn, en true or false retourneert.

const isBelow100 = (array) => {
  return array.every((element) => {
    return element < 100;
  })
}

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
  // result should be: false


// G Bonus! In een array met integers. Schrijf een JavaScript functie die alle waardes in de array bij elkaar optelt en het totaal van de som retourneert. Gebruik de .reduce method.

const bigSum = (array) => {
  return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0)
}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
  // result should be 1118

  