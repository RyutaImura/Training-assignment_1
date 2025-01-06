document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
});
