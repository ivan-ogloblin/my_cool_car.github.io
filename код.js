// Image switcher code

//let myImage = document.querySelector('img');

 /*{
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'порш.jpeg') {
    myImage.setAttribute ('src','порш.jpeg');
  } else {
    myImage.setAttribute ('src','порш 2.jpeg');
  }
}

// Personalized welcome message code*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = myName;
  }
}

// message — текст сообщения (не обязательный), предназначено для информирования пользователя о том,
//  какие данные у него запрашиваются [2](https://itchief.ru/javascript/alert-prompt-confirm)
// default — начальное значение для поля ввода, которое будет по умолчанию в нём отображаться 
// (не обязательное) [2](https://itchief.ru/javascript/alert-prompt-confirm)
const result = prompt(message, default) [2](https://itchief.ru/javascript/alert-prompt-confirm)


/*if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}*/

input.onclick = function() {
  setUserName();
}

