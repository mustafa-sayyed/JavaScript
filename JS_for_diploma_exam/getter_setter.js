const student = {
    name: 'Mustafa',
    get getname() {
        return this.name
    },
    set setname(name) {
        this.name = name
    }
}

console.log(student.name)
console.log(student.name = 'Yusuf')