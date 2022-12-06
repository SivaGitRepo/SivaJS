//* -------> 04---form validation and logical checks
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error')
        msg.innerHTML = "Please enter all the fields";
        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li)
        nameInput.value = '';
        emailInput.value = '';    
    }
}

/* -------> 03---manipulating DOM / Changing things in DOM
const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello!";
ul.children[1].innerText = 'Siva';
ul.lastElementChild.innerHTML = '<h1>third in list</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

//btn.addEventListener('click', (e) => {
//btn.addEventListener('mouseover', (e) => {
btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    //console.log('clicked');
    //console.log(e.target);
    //console.log(e.target.id);
    //console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h2>Changed text</h2>';
})

*/

/* -------> 02---multiple element selection
console.log (document.querySelectorAll('.item'));             // recommended over getElementsByClassName
console.log (document.getElementsByClassName('item'));
console.log (document.getElementsByTagName('li'));

const itemList = document.querySelectorAll('.item');
itemList.forEach((item) => console.log(item));

*/

/* -------> 01---single element selection
console.log (window);
console.log (document.getElementById('my-form'));
console.log (document.querySelector('.container'));
console.log (document.querySelector('h1'));

*/