class Dragon {
  constructor(name, rider, hungry = true) {
    this.name = name;
    this.rider = rider;
    this.hungry = hungry;
    this.hungryCount = 0;
  }
  greet() {
    return `Hi, ${this.rider}!`
  }
  eat(hungry) {
    this.hungryCount++
    if (this.hungryCount >= 3) {return this.hungry = false}
}
}


module.exports = Dragon;
