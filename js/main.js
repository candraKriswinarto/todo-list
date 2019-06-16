// Time
function date() {
    const fullDate = new Date();

    const days = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let day = days[fullDate.getDay()];
    let month = months[fullDate.getMonth()];
    let date = fullDate.getDate();

    let dayNow = `${day}, ${month} ${date}`;

    document.querySelector('.day p').innerHTML = dayNow;
}
setInterval(date, 1000);

// Get Element
let modal = document.querySelector('.modal-wrapper');

// Function to close the modal
function closeModal() {
    modal.classList.remove('modal-wrapper-toggle');
}

// Function add TODO list
function addTodo(text) {
    // Create Element list
    let wrapTodo = document.querySelector('.wrap-todo');

    let list = document.createElement('ul');
    // list.classList.add('todo');

    let item = document.createElement('li');
    item.innerHTML = text;

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    let remove = document.createElement('div');
    remove.classList.add('remove');

    // Add event for remove the item
    remove.addEventListener('click', removeItem);
    
    let removeIcon = document.createElement('i');
    removeIcon.classList.add('far');
    removeIcon.classList.add('fa-trash-alt');    

    let completed = document.createElement('div');
    completed.classList.add('completed');

    // Add Event for completed the item
    completed.addEventListener('click', completedItem);
    
    let completedIcon = document.createElement('i');
    completedIcon.classList.add('fas');
    completedIcon.classList.add('fa-check-circle');

    completed.appendChild(completedIcon);    
    remove.appendChild(removeIcon);
    buttons.appendChild(remove);
    buttons.appendChild(completed);
    list.appendChild(item);
    list.appendChild(buttons);
    wrapTodo.insertBefore(list, wrapTodo.childNodes[0]);
}

// Function for remove the items
function removeItem() {
    let list = this.parentNode.parentNode;
    let parent = list.parentNode;

    parent.removeChild(list);
}

// Function to completed the items
function completedItem() {
    let list = this.parentNode.parentNode;
    let parent = list.parentNode;
    let id = parent.id;

    let target;
    if (id === 'todo') {
        target = document.getElementById('completed');
    } else {
        target = document.getElementById('todo');
    }

    console.log(parent);

    parent.removeChild(list);
    target.insertBefore(list, target.childNodes[0]);
}

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
document.querySelector('.close').addEventListener('click', closeModal);

// User click the add-list button >> add list todo
document.getElementById('add-list').addEventListener('click', function() {
    let value = document.getElementById('list').value;

    if(value) {
        console.log(value);
        addTodo(value);
        document.getElementById('list').value = '';        

        closeModal();
    }
});

