var parent = document.getElementById('section2');

parent.addEventListener('click', function (event) {
    if (event.target.tagName === 'P') {
        parent.removeChild(event.target);
    }
}, false);