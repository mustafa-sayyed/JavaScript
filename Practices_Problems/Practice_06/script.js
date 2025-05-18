let heading = document.querySelector('h1');
console.dir(heading);
heading.innerText = heading.innerText + " from Mustafa";
let boxes = document.querySelectorAll('.box');
console.log(boxes);
console.dir(boxes);

// boxes.forEach((box) => {
//     box.innerText = box.innerText + ' By innerText'
// })

for (const box of boxes) {
    box.innerText = box.innerText + ' By innerText'    
}