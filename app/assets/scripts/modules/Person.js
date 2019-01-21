function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function() {
        console.log("Hello there! I'm ");
    }
}

module.exports = Person;
