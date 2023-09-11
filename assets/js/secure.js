document.onkeydown = function(e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {

    if (event.keyCode == 123) {

        return false;

    }

    if (e.which === 123) {

        return false;

    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {

        return false;

    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {

        return false;

    }

    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {

        return false;

    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {

        console.log('You cannot inspect Element');

        return false;

    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {

        console.log('You cannot inspect Element');

        return false;

    }

    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {

        console.log('You cannot inspect Element');

        return false;

    }

    $(document).ready(function() {
        $('body').bind('cut copy paste', function(e) {
            e.preventDefault();
        });
    });

}