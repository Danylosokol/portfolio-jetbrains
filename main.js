let openWindow = document.querySelector(".open-window");
let popupWindow = document.querySelector(".window");
let close = document.querySelector(".close");

openWindow.onclick = function(){
    popupWindow.style.display = "block";
}

close.onclick = function(){
    popupWindow.style.display = "none";
}