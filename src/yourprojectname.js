// Given a _sharedData from instagram script, return a JSON.

class YourClass {
  constructor(say) {
    this.say = say;
  }

  speak() {
    return this.say;
  }
}

function areYouHappy(bool) {
  if (bool == "ok") {
    return "I am happy!";
  } else {
    return "I want to be happy!";
  }
}

module.exports = {
  YourClass,
  areYouHappy
}
