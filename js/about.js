'use strict';
document.addEventListener('DOMContentLoaded', function(){
    const $dropdowns = getAll('.dropdown:not(.is-hoverable)');

    if($dropdowns.length > 0){
        $dropdowns.forEach(function ($el) {
            $el.addEventListener('click', function (event){
                event.stopPropagation();
                $el.classList.toggle('is-active');
            });
        });

        document.addEventListener('click', function (event) {
            closeDropdowns();
        });
    }

    function closeDropdowns(){
        $dropdowns.forEach(function ($el) {
            $el.classList.remove('is-active');
        });
    }

    document.addEventListener('keydown', function (event) {
        const e = event || window.event;
        if(e.keyCode === 27){
            closeDropdowns();
        }
    });

    const $burgers = getAll('.burger');

    if($burgers.length > 0){
        $burgers.forEach(function ($el) {
            $el.addEventListener('click', function () {
                const target = $el.dataset.target;
                const $target = document.getElementById(target);
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }

    function getAll(selector){
        return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
    }
});