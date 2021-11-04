// ADD NEW ITEM TO END OF LIST
var lastItem = document.createElement('li');
var lastItemText = document.createTextNode('cream');
lastItem.appendChild(lastItemText);

var myList = document.getElementsByTagName('ul')[0];
myList.appendChild(lastItem);

// ADD NEW ITEM START OF LIST
var firstItem = document.createElement('li');
var firstItemText = document.createTextNode('kale');
firstItem.appendChild(firstItemText);

myList.insertBefore(firstItem, myList.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var myListItems = document.getElementsByTagName('li');
var i = 0;

for (i = 0; i < myListItems.length; i++) {
    myListItems[i].setAttribute('class', 'cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var myHeader = document.getElementsByTagName('h2')[0];
myHeader.innerHTML = myHeader.textContent + "<span>" + myListItems.length + "</span>";