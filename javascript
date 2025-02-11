// Add a button that changes color on click
const button = document.createElement('button');
button.textContent = 'Click Me!';
button.style.backgroundColor = 'blue';
document.body.appendChild(button);

button.addEventListener('click', () => {
  button.style.backgroundColor = 'red';
});