class student {
    student1() {
        console.log("This is not a Constructor, It is a Method");
    }
    constructor() {
        console.log("This is Data of Student: ");
    }
    destructor() {
        console.log("this is the destructor")
    }
    getdata(rollno, name, age) {
        this.name = name;
        this.age = age;
        this.rollno = rollno;
    }
    putdata() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Rollne: ${this.rollno}`);
    }
}

const stud1 = new student();
stud1.getdata(134, "Mustafa", 18);
stud1.putdata();