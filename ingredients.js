var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var whilecounter = 0;
while(whilecounter < ingredients.length) {
  console.log(ingredients[whilecounter]);
  whilecounter++
}
// Write a for loop that prints out the contents of ingredients:
for (var i = 0 ; i < ingredients.length ; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = ingredients.length-1 ; i > -1 ; i--) {
  console.log(ingredients[i]);
}