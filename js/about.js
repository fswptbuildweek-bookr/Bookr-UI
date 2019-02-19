class Dropdown {
    constructor(element){
        this.element = element;
        this.button = element.querySelector('div.menu-button');
        this.content = element.querySelector('.dropdown-item');
        
        this.button.addEventListener('click', () => {
            this.toggleContent();
        })
    }
    toggleContent() {
        this.content.classList.toggle('dropdown-hidden');
    }
}

let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new Dropdown(dropdown));