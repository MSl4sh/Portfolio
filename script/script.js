const header = document.querySelector("header")

window.addEventListener("scroll", function(){

	if(window.scrollY > 200 ){
		header.classList.add("scrolled")
        
	}
	else{
		header.classList.remove("scrolled")
         
	}
    
});

function retour(){
    document.documentElement.scrollTop = 0;
}

const accueil= document.getElementById("accBtn")

window.addEventListener("scroll", function(){

    if(window.scrollY >=0 && window.scrollY<800){
        document.getElementById("accBtn").classList.remove("hoverUnderline")
        document.getElementById("accBtn").classList.add("secFocus")
    }
    else{
        document.getElementById("accBtn").classList.remove("secFocus")
        document.getElementById("accBtn").classList.add("hoverUnderline")
 
    }
    if(window.scrollY >=800 && window.scrollY<1764){
        document.getElementById("preBtn").classList.remove("hoverUnderline")
        document.getElementById("preBtn").classList.add("secFocus")
    }
    else{
        document.getElementById("preBtn").classList.remove("secFocus")
        document.getElementById("preBtn").classList.add("hoverUnderline")
 
    }
    if(window.scrollY >=1764 && window.scrollY<2877){
        document.getElementById("compBtn").classList.remove("hoverUnderline")
        document.getElementById("compBtn").classList.add("secFocus")
    }
    else{
        document.getElementById("compBtn").classList.remove("secFocus")
        document.getElementById("compBtn").classList.add("hoverUnderline")
 
    }
    if(window.scrollY >=2877 && window.scrollY<4315){
        document.getElementById("proBtn").classList.remove("hoverUnderline")
        document.getElementById("proBtn").classList.add("secFocus")
    }
    else{
        document.getElementById("proBtn").classList.remove("secFocus")
        document.getElementById("proBtn").classList.add("hoverUnderline")
 
    }
    if(window.scrollY >=4315 && window.scrollY<5000){
        document.getElementById("conBtn").classList.remove("hoverUnderline")
        document.getElementById("conBtn").classList.add("secFocus")
    }
    else{
        document.getElementById("conBtn").classList.remove("secFocus")
        document.getElementById("conBtn").classList.add("hoverUnderline")
 
    }
})  
 
function mail(){
    document.getElementById("mail").style.display="block"
    document.getElementById("merci").style.display="none"
}
 function annuler(){
    document.getElementById("mail").style.display="none"
}

function poster(){
    var userName = document.getElementById("userName").value
    var usermail = document.getElementById("userMail").value
    var usermessage = document.getElementById("user_Message").value

    if ((userName != "") && (usermail != "") && (usermessage != "")){
        let param={
            user_name:document.getElementById("userName").value,
            user_mail:document.getElementById("userMail").value,
            user_message:document.getElementById("user_Message").value,
        }
        emailjs.send("service_h6ghibo","template_h55k9as",param)
        .then(function(res){
            console.log("ok",res.status)
        })


        document.getElementById("mail").style.display="none"
        document.getElementById("merci").style.display="block"
        setTimeout('document.getElementById("merci").style.display="none"', 4000)
    }
    else{
        alert("Tout les champs doivent être remplis.") 
    }
}

