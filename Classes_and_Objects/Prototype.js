const company ={
    tax1() {
        console.log("This is Tax 1");
    },
    tax2: () => {
        console.log("This is Tax 2");
    },
    tax3: function() {
        console.log("This is Tax 3");
    }
}

const employee1 = {
    name: "Employee1",
    salary: 10000,
    tax: company.tax1
}

employee1.__proto__ = company;
