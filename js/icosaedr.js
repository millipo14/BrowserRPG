const icosaedr = document.getElementById('icosaedr');
const resultDiv = document.getElementById('result');
const resultArea = document.getElementById('area');

resultArea.style.display = 'none';

function getImagePath(number) {
    return `./img/dice-${number}.svg`;
}

icosaedr.addEventListener('click', () => {
    resultArea.style.display = 'none';
    icosaedr.classList.add('rotating');
    resultDiv.textContent = "";
    resultDiv.style.opacity = "0";

    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 20) + 1;
        icosaedr.src = getImagePath(randomNumber);
    }, 1500);

    setTimeout(() => {
        icosaedr.classList.remove('rotating');
        resultDiv.textContent = `Ура, удача!`;
        resultDiv.style.opacity = "1";
        resultArea.style.display = 'block';
    }, 3000);
});