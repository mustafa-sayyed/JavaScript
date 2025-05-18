let element = document.getElementsByName("fruits");
console.log(element);

let getName = () => {
    for (let i = 0; i < element.length; i++) {
    if (element[i].checked) {
        console.log(element[i].value);
    }    
}
}
