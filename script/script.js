const header = document.querySelector("header")
const home = document.querySelector(".homePassive")

window.addEventListener("scroll", function(){

	if(window.scrollY >= 200){
		header.classList.add("scrolled")
        home.style.display = "block"
	}
	else{
		header.classList.remove("scrolled")
        home.style.display = "none"  
	}
    if(window.scrollY>10){
        console.log(window.scrollY)
    }
});

function retour(){
    document.documentElement.scrollTop = 0;
}
function presentation(){
    document.documentElement.scrollTop = 785;
}
function competence(){
    document.documentElement.scrollTop = 1800;
}
function projet(){
    document.documentElement.scrollTop = 2917;
}
function contact(){
    document.documentElement.scrollTop = 4360;
}

const accueil= document.getElementById("accueil")

function test(){
    if(window.scrollY >=0 && window.scrollY<785){
        accueil.className.replace("hoverUnderline","secFocus");
    }
};