const container = document.querySelector('.container');

const randomHexColorCode = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

const fragment = document.createDocumentFragment();

for(let i = 0; i < 20; i++) {
    const divEle = document.createElement('div');
    const hexColor = randomHexColorCode();
    divEle.classList.add('color-container');
    divEle.style.backgroundColor = hexColor;
    divEle.textContent = hexColor;
    fragment.appendChild(divEle);
}

container.appendChild(fragment);
