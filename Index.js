//Text bar
var textbar = document.getElementById('textbar');

//List
var list = document.getElementById('list');
list.addEventListener('click', checked, false);

//Submit button
var submit = document.getElementById('submit');
submit.value = 'Add to list';
submit.addEventListener('click', clicked);

//Adding the text to the list
function clicked() {
    //Make sure the text bar isnt empty
    if (textbar.value === '') {
        alert("Write something");
        return;
    }
    //This is the text from the text bar
    var text = document.createTextNode(textbar.value);
    //This is a new list element
    var newItem = document.createElement('li');
    //First we add the text from the text bar inside the list element...
    newItem.appendChild(text);
    //Then we add that list element inside the list...
    list.appendChild(newItem);
    //Finally revert the text bar to empty for a new submission
    textbar.value = '';
}

//Removing items from the list
function checked(event) {
    if(event.target.tagName === 'LI') {
        list.removeChild(event.target);
    }
}