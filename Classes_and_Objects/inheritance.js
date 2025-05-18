class Human {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log("eating");
  }
  sleep() {
    console.log("sleeping");
  }
  work() {
    console.log("Do nothing");
  }
}

class SoftwareEngineer extends Human {
  constructor(name) {
    super(name);
    super.work(); // Using the super keywoed we can call parent class methods and constructor
    super.eat();
    console.log(`Software Engineer: ${this.name}`);
  }
  code() {
    console.log("Coding");
  }
  work() {
    console.log("Building Software");
  }
}

let mustafa = new SoftwareEngineer("Mustafa");
mustafa.code();
mustafa.eat();
mustafa.work();
mustafa.sleep();
