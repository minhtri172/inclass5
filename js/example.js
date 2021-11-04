// ADD NEW ITEM TO END OF LIST
var firstItem = document.createElement('li');
var firstItemText = document.createTextNode('cream');
firstItem.appendChild(firstItemText);

var myList = document.getElementsByTagName('ul')[0];
myList.appendChild(firstItem);

// ADD NEW ITEM START OF LIST
var lastItem = document.createElement('li');
var lastItemText = document.createTextNode('kale');
lastItem.appendChild(lastItemText);

myList.insertBefore(lastItem, myList.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var myListItems = document.getElementsByTagName('li');
var i = 0;

for(i = 0; i < myListItems.length; i++) {
    myListItems[i].setAttribute('class', 'cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var myHeader = document.getElementsByTagName('h2')[0];
myHeader.innerHTML = myHeader.textContent + "<span>" + myListItems.length + "</span>";