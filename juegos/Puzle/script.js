function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var target = ev.target;
    target.appendChild(document.getElementById(data));

    updateShadow();
}
  
function updateShadow() {
    var divs = document.querySelectorAll("#text div");
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        if (div.childElementCount > 0) {
            div.parentNode.classList.add("shadow");
        } 
        else {
            div.parentNode.classList.remove("shadow");
        }
    }
}

  