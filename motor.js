
function toggleDisplay (elementName) {
    let x = document.getElementById(elementName);
    if (x.style.display === "block" || x.style.display === "") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}

