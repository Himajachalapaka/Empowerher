let list = document.querySelector("#myList");
let button = document.querySelector("#addBtn");
button.onclick = function () {
    let newItem = document.createElement("li");
    newItem.textContent = "New Item";
    list.appendChild(newItem);
    let allItems = document.querySelectorAll("#myList li");

    for (let i = 0; i < allItems.length; i++) {
        if ((i + 1) % 2 !== 0) {
            allItems[i].style.fontStyle = "italic";
            allItems[i].style.color = "red";
            allItems[i].style.fontWeight = "bold";
        }

        else {
            allItems[i].style.fontStyle = "italic";
            allItems[i].style.color = "blue";
            allItems[i].style.fontWeight = "bold";
        }
    }
};
