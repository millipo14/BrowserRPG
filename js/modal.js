document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('dice-modal');
    const iframe = document.getElementById('dice-iframe');
    const diceButtons = document.querySelectorAll('.dice-btn');
    //обработчик для кнопок
    diceButtons.forEach(button => {
        button.addEventListener('click', function () {
            const checkType = this.getAttribute('data-check');
            iframe.src = `icosaedr.html?check=${encodeURIComponent(checkType)}`;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; //блокировка прокрутки
        });
    });
    //закрытие модального окна
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    // Функция для закрытия из iframe
    window.closeDiceModal = function () {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    };
});