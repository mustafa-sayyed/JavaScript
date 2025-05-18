let btn = document.getElementById('btn');
console.log(btn.tagName);

let div1 = document.querySelector(".item");
console.log(div1);
console.log(div1.children);
console.log(div1.childNodes);
console.log(div1.style);

let div2 = document.querySelectorAll(".item");
console.log(div2);

let body = document.querySelector('.body');
console.log(body.innerHTML);
console.log(body.innerText);
console.log(body.textContent);





















// btn.addEventListener('click', () => {
//     console.log(`hasAttribute: ${btn.hasAttribute("id")}  nodeCount: ${btn.ATTRIBUTE_NODE}  attributeList: ${btn.getAttribute('id')} `);
//     console.dir(btn);
// })