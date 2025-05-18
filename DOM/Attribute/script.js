let ele = document.querySelector('#test');
console.log(ele);

function showAttribute() {
    alert(`The attribute is id: ${ele.getAttribute("id")}`);
    console.log('Done');
}

let add = document.getElementById('add');
add.onclick = async () => {
    ele.setAttribute('id', 'test');
    // await alert('The id attribute is set to the Element');
    console.log('Done');
}

document.getElementById('delete').onclick = () => {
    ele.removeAttribute('id');
    // alert('The id attribute is removed from the Element');
    console.log('Done');
}