let body = document.querySelector('body');
let btn = document.createElement("button");
console.log(btn);
btn.innerText = "Click Here!";
btn.style.padding = "10px 12px";
btn.style.backgroundColor = "pink";
btn.id = "iCanGiveId";
btn.setAttribute("class", "myClas");
btn.classList.add("test");
body.prepend(btn);


btn.addEventListener("click", () => {
    body.classList.toggle('dark');
})