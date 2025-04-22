// DOM Elements
const dynamicText = document.getElementById('dynamicText');
const styleText = document.getElementById('styleText');
const elementContainer = document.getElementById('elementContainer');

// Buttons
const changeTextBtn = document.getElementById('changeTextBtn');
const changeStyleBtn = document.getElementById('changeStyleBtn');
const toggleElementBtn = document.getElementById('toggleElementBtn');

// Change text content
changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = 'Text has been changed dynamically!';
});

// Modify CSS styles
changeStyleBtn.addEventListener('click', () => {
    styleText.classList.toggle('highlight');
});

// Add/Remove element
toggleElementBtn.addEventListener('click', () => {
    if (elementContainer.children.length === 0) {
        const newElement = document.createElement('p');
        newElement.textContent = 'New element added!';
        elementContainer.appendChild(newElement);
    } else {
        elementContainer.removeChild(elementContainer.firstChild);
    }
});