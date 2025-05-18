let body = document.body;
body.style.fontSize = "20px";
body.style.color = "red";


let ul = document.querySelector("ul");

let fruits = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

for (const fruit of fruits) {
    let li = document.createElement("li");
    li.innerText = fruit;
    ul.append(li)
}

let list = document.querySelector("li");
console.log(list);
let li = document.createElement("li");
li.innerText = "Custurd Apple";
// ul.before(li);
// ul.after(li);
// ul.remove();
// ul.prepend(li);
// ul.appendChild(li)



let removedChild = ul.removeChild(list);
console.log(removedChild.innerText);


  