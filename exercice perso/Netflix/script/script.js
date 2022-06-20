
window.addEventListener("scroll", function(){

	if(window.scrollY >= 10){

		document.querySelector("#nav").id="nav2"
		
        
	}
	else{
        
		document.querySelector("#nav2").id="nav"
        
	}
});

const scrollRight = document.querySelector(".scrollRight")
const element = document.querySelector(".series")

scrollRight.addEventListener("click", function () {

	element.scrollLeft+=1890



});

const scrollLeft = document.querySelector(".scrollLeft")

scrollLeft.addEventListener("click", function () {

	element.scrollLeft+=-1890



});