let heading = document.getElementById("title")
heading.textContent = "Welcome to DOM world";
let allParagraphs = document.getElementsByTagName("p");
allParagraphs[0].style.color = "blue";
allParagraphs[1].style.color = "blue";
allParagraphs[2].style.color = "blue";
let containerDiv = document.querySelector(".container");
containerDiv.style.backgroundColor = "yellow";