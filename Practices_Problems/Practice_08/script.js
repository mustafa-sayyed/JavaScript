const data = {
    wifiName: "ABC",
    wifiPassword: "ACB@123"
}

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Data: ", data);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        data.wifiName = "XYZ";
        data.wifiPassword = "XYZ@123";
        console.log("Edited Data: ", data);
    }
}

let student1 = new User("Mustafa", "mustafa@abc.in");
student1.viewData();
let admin1 = new Admin("ABC", "abc@abc.in")
admin1.editData();