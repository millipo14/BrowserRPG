//gender.html
const gender = document.querySelectorAll('.man, .woman');
if (gender.length > 0) {
    gender.forEach(btn => {
        btn.addEventListener('click', () => {
            gender.forEach(button => button.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });
}

//character.html
const desc1 = document.querySelector('.ds-1');
const desc2 = document.querySelector('.ds-2');
if (desc1 && desc2) {
    desc1.classList.remove('active');
    desc2.classList.remove('active');

    const speciesBtn = document.querySelectorAll('.species-1, .species-2');
    const classBtn = document.querySelectorAll('.class-1, .class-2');

    speciesBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            speciesBtn.forEach(button => button.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    classBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            classBtn.forEach(button => button.classList.remove('selected'));
            btn.classList.add('selected');
            if (btn.classList.contains('class-1')) {
                desc1.classList.add('active');
                desc2.classList.remove('active');
            } else {
                desc1.classList.remove('active');
                desc2.classList.add('active');
            }
        });
    });
}