const student = {
    name: "Mustafa",
    rollno: 144,
    age: 18,
    grade: "A",
    subjects: ["JavaScript", "Node.js", "Express.js", "React.js", "MongoDB"],
    // getDetails: function() {
    //     console.log(`Name: ${this.name}, Roll No: ${this.rollno}, Age: ${this.age}, Grade: ${this.grade}, Subjects: ${this.subjects.join(", ")}`);
    // }
}
// console.log(student.getDetails());



student.age += 1;

//  Using this both way we can take value from a object
console.log(student["rollno"]);
console.log(student["age"]);
console.log(student.name);



/*****************************************************************************************************************/

const product = {
    name: "Ball Pen",
    rating: 4.1,
    price: 240,
    discount: "5%",
    isDeal: true
}
product.discount = "50%"
delete product.discount;
console.log(product);
