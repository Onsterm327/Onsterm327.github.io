// import LoginBtn from "../../components/LoginBtn";
// import Vue from 'vue'
function init() {
    init_img();
}
function init_img() {
    var selector = document.querySelector("#app > div.theme-container > div > div:nth-child(3) > aside > nav");
    var div = document.createElement('div');
    div.style = 'width:100%;';
    div.innerHTML = '<img style="width:100%;" src="' + '/img/model.png' + '">';
    insertAfter(div, selector);
}
function insertFinal(newElement, targentElement) {
    targentElement.appendChild(newElement);
}
function insertAfter(newElement, targentElement) {
    var parent = targentElement.parentNode;
    if (parent.lastChild == targentElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targentElement.nextSibling);
    }
}
window.onload = function () {
    init();
}