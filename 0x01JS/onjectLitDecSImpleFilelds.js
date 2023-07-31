const createPerson = (name, age, gender) => ({name, age, gender});
// this is the old way of doing things
//     return {
//         name: name, 
//         age: age,
//         gender: gender
//     };
// };

console.log(createPerson("Edgar Wendoh", 29, "male"));