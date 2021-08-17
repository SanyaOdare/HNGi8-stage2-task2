const myBtn = document.getElementById('show-name');
const myHeading = document.getElementById('intro');

function showMyName() {
  myHeading.innerHTML = 'My name is';
  myBtn.innerText = 'Sanya Oluwadare';  
  console.log(`My name is ${myBtn.innerText}`);
}

myBtn.addEventListener('click', showMyName);