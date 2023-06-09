var navbar = document.querySelector(".navbar");
// when the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () => {
	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// navbar Toggler

const navMenu = document.querySelector(".menu");
navTogle = document.querySelector(".menu-btn");
if(navTogle) {
	navTogle.addEventListener("click", () => {
		navMenu.classList.toggle("active");
	})
}

// closing menu when navlink is clicked 
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
	const navMenu = document.querySelector(".menu");
	navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))
// product colors

var pic = document.querySelector('#main-shoe');
var yellow = document.querySelector('.yellow');
var grey = document.querySelector('.grey');
var blue = document.querySelector('.blue');
var black = document.querySelector('.black');
var green = document.querySelector('.green');
var red = document.querySelector('.red');
const colors = document.querySelectorAll('.color');
// store product info in object

var info = [

	{
		src: "images/action-4.jpg"
	},
	{
		src: "images/action-6-comp.jpg"
	},
	{
		src: "images/action-5.png"
	},
	{
		src: "images/action-3.jpg"
	},
	{
		src: "images/action-2.jpg"
	},
	{
		src: "images/action-1.jpg"
	}
]

// change color 
yellow.addEventListener("click", function() {
	pic.src = info[0].src;
})
grey.addEventListener("click", function() {
	pic.src = info[1].src;
})
blue.addEventListener("click", function() {
	pic.src = info[2].src;
})
black.addEventListener("click", function() {
	pic.src = info[3].src;
})
green.addEventListener("click", function() {
	pic.src = info[4].src;
})
red.addEventListener("click", function() {
	pic.src = info[5].src;
})

// active color
function color() {
	colors.forEach(c => c.classList.remove('active'));
	this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));