document.addEventListener("DOMContentLoaded", function() {

let cursorR = 10; 
const cursor = document.getElementById('cursor');  

document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

const linkElem = document.querySelectorAll('a,button,label,.acc-btn');
for (let i = 0; i < linkElem.length; i++) {
    linkElem[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('hover');
    });
    linkElem[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('hover');      
    });
}
});
