var a = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

for (var i = 0; i < 5; i++){
    a.push(getRandomInt(10));
}

console.log(a);

a.forEach(element => console.log(element));