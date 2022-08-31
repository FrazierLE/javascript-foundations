class Vampire {
  constructor(name, pet = 'bat') {
  this.name = name;
  this.pet = pet;
  this.thirsty = true;
  this.drinkCount = 0;
  this.ouncesDrank = 0;
}
drink() {
  this.thirsty = false;
  this.ouncesDrank += 1 * 10
  this.drinkAmount = this.ouncesDrank + 10
  console.log(this.drinkAmount)
  for (var i = 0; i < 5; i++) {
  if (this.ouncesDrank[i] >= 50) {console.log('I\'m too full to drink anymore!')}
}
}
}






module.exports = Vampire;
