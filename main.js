let openWindow = document.querySelectorAll(".open-window");
let popupWindow = document.querySelectorAll(".window");
let close = document.querySelectorAll(".close");


for(let i = 0; i < openWindow.length; i++) {
    openWindow[i].onclick = function() {
        requestAnimationFrame(()=>{
            popupWindow[i].style.transition = 'display ${5s}';
            popupWindow[i].style.display = "block";
        },0);
    }
    close[i].onclick = function () {
        popupWindow[i].style.display = "none";
    }
    popupWindow[i].onclick = function(e){
        if(e.target === popupWindow[i]){
            popupWindow[i].style.display = "none";
        }
    }
}