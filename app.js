console.log('Welcome to my CodePen project!');
var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
buttons[i].addEventListener('mouseenter', function() {
this.style.opacity = '0.8';
});
buttons[i].addEventListener('mouseleave', function() {
this.style.opacity = '1';
});
}
var navLinks = document.querySelectorAll('.main-nav a');
for (var j = 0; j < navLinks.length; j++) {
navLinks[j].addEventListener('click', function(event) {
event.preventDefault();
console.log('Navigation clicked: ' + this.textContent);
});
}
var fileItems = document.querySelectorAll('.file-item');
for (var k = 0; k < fileItems.length; k++) {
fileItems[k].addEventListener('click', function() {
console.log('File selected: ' + this.textContent);
});
}