const yes=document.getElementById("yes");
const no=document.getElementById("no");

yes.onclick=()=>{

window.location.href="proposal.html";

};

function moveButton(){

const x=Math.random()*(window.innerWidth-150);

const y=Math.random()*(window.innerHeight-80);

no.style.left=x+"px";
no.style.top=y+"px";

}

no.addEventListener("mouseover",moveButton);

no.addEventListener("click",moveButton);

no.addEventListener("touchstart",moveButton);
