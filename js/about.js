document.addEventListener('DOMContentLoaded', function(){
    const $dropdowns = getAll('.navbar-item.has-dropdown:not(.is-hoverable)');

    if($dropdowns.length > 0){
        $dropdowns.forEach(function ($el) {
            $el.addEventListener('click', event =>{
                event.stopPropagation();
                $el.classList.toggle('is-active');
            });
        });

        document.addEventListener('click', event => {
            closeDropdowns();
        });
    }

    function closeDropdowns(){
        $dropdowns.forEach($el => {
            $el.classList.remove('is-active');
        });
    }

    document.addEventListener('keydown', event => {
        const e = event || window.event;
        if(e.keycode === 27){
            closeDropdowns();
        }
    });

    const $burgers = getAll('.burger');

    if($burgers.length > 0){
        $burgers.forEach($el => {
            $el.addEventListener('click', function () {
                const target = $el.dataset.target;
                const $target = document.getElementById(target);
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }

    function getAll(selectors){
        return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
    }
});