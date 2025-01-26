/*function Circle(radius) {

    let color ='red';

    this.radius = radius;

    this.defaultlocation = { x:0, y:0 };

    this.computeoptimumLocation = function() {

    }

    this.draw = function(factor) {
        console.log('draw');
    }
} 

const Circle = new Circle(10);
Circle.computeoptimumLocation();
Circle.draw();

/*Circle.location = { x: 1 };

const propertyName = 'center location';
circle[propertyName] = { x: 1 };

delete circle.location;*/

/*for (let key in circle) {
    if (typeof circle[key] !== 'function')
    console.log(key,circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if (' radius' in circle)
    console.log('circle has a radius');*/
 /*function reversestring(reverseMe){
    var reversed ="";
    for (var i = reverseMe.length -1 ; i >= 0; i--){
        reversed += reverseMe[i]
    }

    return reversed;
 }
 console.log ("The reverse of Julia is:");
  console.log(reversestring("Julia"));*/
  
  /*function isThisWorking(input) {
    console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
    //return "Returning: I am returning this string!";
  }
  
  isThisWorking(3);*/

 /* function getClothing(isCold) {
    if (isCold) {
      var freezing = 'Grab a jacket!';
    } else {
      var hot = 'It’s a shorts kind of day.';
      console.log(freezing);
    }
  }
  
  getClothing(false)*/

/*
  function getClothing(isCold) {
    if (isCold) {
      const freezing = 'Grab a jacket!';
    } else {
      const hot = 'It’s a shorts kind of day.';
      console.log(freezing);
    }
  }
  
  getClothing(false)*/

  let x = 1;

function addTwo() {

   let x = 2;
   //x += 2;
}

addTwo();
x = x + 1;
console.log(x);