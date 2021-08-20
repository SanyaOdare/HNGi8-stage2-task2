const myBtn = document.getElementById('show-name');
const myHeading = document.getElementById('intro');

function showMyName() {
  myHeading.innerHTML = 'My name is';  
  myBtn.innerHTML = '<a href="https://hngi8-stage2-task3.netlify.app" target="_blank">Sanya Oluwadare</a>';
  console.log(`My name is ${myBtn.innerText}`);
}

myBtn.addEventListener('click', showMyName);


/*
const myBtn = document.getElementById('show-name');
const myHeading = document.getElementById('intro');

function showMyName() {
  myHeading.innerHTML = 'My name is';
  myBtn.innerText = 'Sanya Oluwadare';
    function myLink() {
      let a = document.createElement('a');
      let myName = document.createTextNode('Sanya Oluwadare');
      a.appendChild(myName);
      a.href = 'https://hngi8-stage2-task3.netlify.app';
}
  // myLink();
  console.log(`My name is ${myBtn.innerText}`);
}

myBtn.addEventListener('click', showMyName);
*/