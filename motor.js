
// Dropdown menu (getElementByClassName)
function toggleNav (elementName) {
    let x = document.getElementById(elementName);
    if (x.style.display === "" || x.style.display === "none") {
        x.style.display = "flex"
    } else {
        x.style.display = "none"
    }
}


//Financial: bubble-text display toggle
function toggleDisplay (elementName) {
    let x = document.getElementById(elementName);
    if (x.style.display === "block" || x.style.display === "") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}

