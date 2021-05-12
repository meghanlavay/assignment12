// // STEP 1 - CAT
// class Cat {
//   constructor() {
//     console.log(`The new cat has been created.`);
//   }
// }

// // // STEP 2 - CAT
// const cat1 = new Cat(); 

// // STEP 1 - DOG
// const Dog = function() {
//     console.log(`The new dog has been created.`);
//   }

// // STEP 2 - DOG
//   const dog1 = new Dog(); 

// // STEP 3
// class Animal {
//   constructor() {
//     console.log(`The Animal has been created.`);
//   }
// }
// const animal1 = new Animal(); 

// STEP 4
// class Animal {
//   constructor(value) {
//     console.log(value);  }
// }
// const animal1 = new Animal('The value of the argument'); 

// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length= length;
//         console.log(`The ${this.type} is a ${this.color} ${this.breed} that is ${this.height} inches tall and ${this.length} inches long.`);
//     }
// }
// const myAnimal = new Animal('dog', 'Chihuahua', 'white', 12, 14);

// STEP 6
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length= length;
//     }
// }
// const myAnimal = new Animal('dog', 'Chihuahua', 'white', 12, 14);
// for(const prop in myAnimal) {
//   console.log(`${prop}: ${myAnimal[prop]}`)
// }

// STEP 7
// class Animal {
//   constructor(type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length= length;
//   }

//   speak = function() {
//     if(this.type === 'cat') {
//       console.log(`The ${this.color} cat is meowing!`); 
//     } else if(this.type === 'dog') {
//       console.log(`The ${this.color} dog is barking!`); 
//     }
//   }
// }
// const myAnimal1 = new Animal('dog', 'Chihuahua', 'white', 12, 14);
// myAnimal1.speak();
// const myAnimal2 = new Animal('cat', 'Siamese', 'tan', 10, 12);
// myAnimal2.speak();

// STEP 8
// function Animal(type, breed, color, height, length) {
//   let _type = type;
//   let _breed = breed;
//   let _color = color;
//   let _height = height;
//   let _length = length;
//   let checkType = function() {
//     if(_type === 'cat') {
//       return _type; 
//     } else if(_type === 'dog') {
//       return _type;     
//     }
//   }
  
//   this.speak = function() {
//     console.log(`The ${checkType()} has made a noise`);
//   }
// }

// const myAnimal1 = new Animal('dog', 'Chihuahua', 'white', 12, 14);
// myAnimal1.speak();
// const myAnimal2 = new Animal('cat', 'Siamese', 'tan', 10, 12);
// myAnimal2.speak();

// STEP 9
// String.prototype.findWords = function(text, word) {
//   let i =0;
//   count = 0;
//   let textArr = text.split(' ');
//   for(i; i < textArr.length; i++){
//       if(textArr[i].toLowerCase() === word) {
//           count +=1;
//       }
//   }
//   alert(`The word ${word} can be found in the text ${count} times.`)
// }

// const newString = new String();
// newString.findWords('In writing, the words point and purpose are almost synonymous. Your point is your purpose, and how you decide to make your point clear to your reader is also your purpose. Writers have a point and a purpose for every paragraph that they create.', 'point');