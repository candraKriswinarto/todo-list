// Get Element
let modal = document.querySelector('.modal-wrapper');


// User click the search button
const search = document.querySelector('.search');
search.addEventListener('click', function() {
    const input = document.getElementById('input');

    // Show & hide the einput
    input.classList.toggle('input-show');

    if (input.value) {
        
    }
});

// User click the add button >> show the modal
document.getElementById('add').addEventListener('click', function() {

    modal.classList.add('modal-wrapper-toggle');
});

// User click the close button in modal >> close the modal
document.querySelector('.close').addEventListener('click', function() {
    modal.classList.remove('modal-wrapper-toggle');
});
