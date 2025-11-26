let colorInput = document.getElementById("colorInput");
let textInput = document.getElementById("textInput");
let box = document.getElementById("box");

let bgButton = document.getElementById("bgBtn");
let textButton = document.getElementById("textBtn");

bgButton.onclick = function () {
    let colorValue = colorInput.value;

    box.style.backgroundColor = colorValue;

    if (box.style.backgroundColor === "") {
        alert("Invalid color name!");
    }
};

textButton.onclick = function () {
    let textValue = textInput.value;

    if (textValue === "") {
        alert("Please enter some text!");
    } else {
        box.textContent = textValue;
    }
};
