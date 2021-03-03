const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];

// 1. Maak een array van alle superhelden namen

const heroesNames = superheroes.map((element) => {
  return element.name;
});

console.log(heroesNames);


// 2. Maak een array van alle "lichte" superhelden (< 190 pounds)

const lightHeroes = superheroes.filter((superhero) => {
  return superhero.weight < 190;
})

console.log(lightHeroes);

// 3. Maak een array met de namen van de superhelden die 200 pounds wegen

const heavyHeroes = superheroes.filter((superhero) => {
  return superhero.weight == 200;
});

console.log("Heavy superheroes:", heavyHeroes);

const heavyHeroesNames = heavyHeroes.map((superhero) => {
  return superhero.name;
})

console.log(heavyHeroesNames);

// Make above chained:

const heavyHeroesNamesChaining = superheroes.filter((superhero) => {
   return superhero.weight == 200}).map((superhero) => {
  return superhero.name;
});

console.log(heavyHeroesNamesChaining);


// 4. Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad

const firstAppearance = superheroes.map((superhero) => {
  return superhero.first_appearance;
});

console.log(firstAppearance);

// 5. Maak een array met alle superhelden van DC Comics. Is dat gelukt? Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.

const dcComics = superheroes.filter((superhero) => {
  return superhero.publisher === "DC Comics"
}).map((superhero) => {
  return superhero.name;
})

console.log("Alle superhelden van DC Comics: ", dcComics);

const marvelComics = superheroes
  .filter((superhero) => {
    return superhero.publisher === "Marvel Comics";
  })
  .map((superhero) => {
    return superhero.name;
  });

  console.log("Alle superhelden van Marvel Comics: ", marvelComics);

  
// 6. Tel het gewicht van alle superhelden van DC Comics bij elkaar op.

  const allDCComics = superheroes.filter((superhero) => {
    return superhero.publisher === "DC Comics"
  });

  console.log(allDCComics);

  const weightsOfDCComics = allDCComics.map((superhero) => {
    if(superhero.weight !== "unknown") {
      return parseInt(superhero.weight);
    } else {
      return 0;
    }
  });

  console.log(weightsOfDCComics);

  const addedWeightOfAllDCComics = weightsOfDCComics.reduce((acc, cValue) => {
    return acc + cValue;
  }, 0);

  console.log(addedWeightOfAllDCComics);

  // In verkorte versie met chaining

const weightAddedOfAllDCComics = superheroes
.filter((superhero) => superhero.publisher === "DC Comics")
.map((superhero) => {
  if (superhero.weight !== "unknown") {
    return parseInt(superhero.weight);
  } else {
    return 0;
  }
})
.reduce((acc, cValue) => acc + cValue, 0);  

console.log(weightAddedOfAllDCComics);

// 7. Doe hetzelfde met alle superhelden van Marvel Comics

  const allMarvelComics = superheroes.filter((superhero) => {
    return superhero.publisher === "Marvel Comics";
  });

  console.log(allMarvelComics);

  const weightsOfMarvelComics = allMarvelComics.map((superhero) => {
    if (superhero.weight !== "unknown") {
      return parseInt(superhero.weight);
    } else {
      return 0;
    }
  });

  console.log(weightsOfMarvelComics);

  const addedWeightOfAllMarvelComics = weightsOfMarvelComics.reduce((acc, cValue) => {
    return acc + cValue;
  }, 0);

  console.log(addedWeightOfAllMarvelComics);

  // In verkorte versie met chaining

  const weightAddedAllMarvelComics = superheroes
  .filter((superhero) => superhero.publisher === "Marvel Comics")
  .map((superhero) => {
    if (superhero.weight !== "unknown") {
      return parseInt(superhero.weight);
    } else {
      return 0;
    }
  })
  .reduce((acc, cValue) => acc + cValue, 0);

  console.log(weightAddedAllMarvelComics);


// 8. zoek de zwaarste superheld!

  // zet alle gewicht om in nummers
  const superheroesWeightToNumber = superheroes.map((superhero) => {
    if (superhero.weight !== "unknown") {
      superhero.weight = parseInt(superhero.weight);
    } else {
      superhero.weight = 0
    }
    return superhero;
  });

  console.log("All heroes weight to numbers", superheroesWeightToNumber);

  // zoek het hoogste gewicht

  const biggestWeightSuperhero = superheroesWeightToNumber.reduce((acc, cValue) => {
    if (acc.weight > cValue.weight) {
      return acc
    } else {
      return cValue;
    }
  });

  console.log("Heaviest superhero is", biggestWeightSuperhero);

  