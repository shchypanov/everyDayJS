// Класс для Попапа

function Popup(options) {
    this.modal = document.querySelector(options.modal);
    this.overlay = document.querySelector(options.overlay);

    let popup = this;

    this.open = function (content) {
        popup.modal.innerHTML = content;
        popup.overlay.classList.add('open');
        popup.modal.classList.add('open');
    };

    this.close = function () {
        popup.overlay.classList.remove('open');
        popup.modal.classList.remove('open');
    };

    this.overlay.onclick = popup.close;
}

// popup

window.onload = function () {

    let popup = new Popup({
        modal: '.modal',
        overlay: '.overlay'
    });

    let popupAll = document.querySelectorAll('.popup');

    for (let i = 0; i < popupAll.length; i++) {
        let form = document.querySelector('.wrap-popup');
        popupAll[i].onclick = function(){
            popup.open(form.innerHTML)
        };

    }



};