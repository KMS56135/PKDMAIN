import createElement from "../../assets/lib/create-element.js";

export default class MainNav {
    constructor () {}

    popup() {
        const popup = createElement(
            `<div class='popup' id='popup-active'>
                <div class='popup__inner'>
                    <div class='popup__nav'>
                        <a class='popup__link' href='$'>.Главная</a>
                        <a class='popup__link' href="#partners-section">.Проекты</a>
                        <a class='popup__link' href="#career-section">.Преимущества</a>
                        <a class='popup__link' href=''>.Блог</a>
                        <a class='popup__link' href=''>.Контакты</a>
                    </div>
                </div>
            </div>`
        )
        const header = document.querySelector('.header');
        header.append(popup);
    }

    hendleClick(event) {
        const page = document.querySelector('.page');

        

        if (!(page.clientWidth < 1024)) {
            return
        }

        event.preventDefault();
        this.popup();
        const popupActive = popupActive === null ? document.querySelector('#popup-active') : null;
        console.log(popupActive);
    }

    addEventClick() {
        const headerLink = document.querySelector('#header-button');
        headerLink.addEventListener('click', this.hendleClick.bind(this));
    }

    updateWindow() {
        const popup = document.querySelector('.popup');
        const page = document.querySelector('.page');

        if (popup && page.clientWidth > 1024 ) {
            popup.remove();
        }

        const headerLink = document.querySelector('#header-button');

        if (page.clientWidth < 1024) {
            headerLink.textContent = ".Меню";
        } else {
            headerLink.textContent = ".Контакты";
        }
    }

    init() {
        this.addEventClick();
        this.updateWindow();
        window.addEventListener('resize', this.updateWindow.bind(this));
    }
}