var ourDog = {
    "name": "Camoer",
    "legs": 4, 
    "tails": 1,
    "friends": ["everything"]
};

ourDog.name = 'Happy Camper'; //dot notation in updating oblect properties
ourDog.bark = "bow-wow"; //addinf a new property with the dot notation
ourDog['eats'] = 'Liver';

delete ourDog.bark;

var tail = ourDog.tails;
var legs = ourDog["legs"]; //Brakect notation is required if the property name has a space in it like 'an entree'
//Bracket notation can also be used to look objcet properties using variables