let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the item 3 to the second container
// YOUR CODE !!
const itemToMove = container1.lastElementChild;
container2.appendChild(itemToMove);

//  2- Remove item 4
// YOUR CODE !!
const itemToDelete = container2.firstElementChild;
itemToDelete.remove();

   
// 3- Create a new item 10 and add it to container 3
// YOUR CODE !!
const newDiv = document.createElement("div");
newDiv.className = "item";
newDiv.textContent = "10";
container3.appendChild(newDiv);


//  4- Set all items located in a blue container to red
// YOUR CODE !!
const blueItems = document.querySelectorAll('.containerBlue .item');
for(const item of blueItems){
    item.style.color = 'red';
}