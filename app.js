var idCount = 0;
var catchCount = 0;
var playground = document.getElementById("playground");
var body = document.getElementById("content");
var dictionary = {};

createButton();

function createButton(){
    
    var id = idCount;
    dictionary[id] = 0;
    idCount++
    var divBox = document.createElement("div");
    divBox.classList.add("jump-box", "center");
    divBox.setAttribute("id", id);
    var divButton = document.createElement("div");
    divButton.classList.add("button");
    divBox.appendChild(divButton);
    playground.appendChild(divBox);
    divBox.addEventListener('click', () => {
        buttonClick(id, divButton, divBox);
    })
    divBox.addEventListener('mouseover', () => {
        if (dictionary[id] > 1) {
            divBox.style.top = Math.floor(Math.random() * 100) + "%";
            divBox.style.right = Math.floor(Math.random() * 100) + "%";
        }
    })
}

function buttonClick(id, divButton, divBox) { 
    console.log("buttonclick bevore switch", id, dictionary, dictionary[id], catchCount);

    switch (dictionary[id]) {
        case 0:    
            body.classList.add("darkmode");
            break;
    }

    switch (dictionary[id]) {
        case 0:            
        console.log("buttonclick switch case 1");
            divButton.classList.add("color-change");
            break;
        case 1:
            playground.style.margin="0 0 65px 85px";
            divBox.style.top = Math.floor(Math.random() * 100) + "%";
            divBox.style.right = Math.floor(Math.random() * 100) + "%";
            break;
        case 2:
            createButton();
            break;
        case 10:
            divButton.classList.add("hover-effect");
            break;
        default:
            break;
    }
    dictionary[id]++;
    catchCount++;
}