class Dropdown {
    constructor(element){
        this.element = element;
        this.button = element.querySelector('div.menu-button');
        this.content = element.querySelector('.dropdown-content');
        
        this.button.addEventListener('click', () => {
            this.toggleMenu();
        })
    }
    toggleMenu() {
        this.content.classList.toggle('dropdown-hidden');
    }
}

let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new Dropdown(dropdown));