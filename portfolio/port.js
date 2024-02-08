var titlelinks=document.getElementsByClassName('title-links');
var titlecontents=document.getElementsByClassName('title-contents');

function opentab(titlename){
    for(titlelink of titlelinks){
        titlelink.classList.remove('active-links');
    }
    for(titlecontent of titlecontents){
        titlecontent.classList.remove('active-title');
    }
    event.currentTarget.classList.add('active-links');
    document.getElementById(titlename).classList.add('active-title');
}

var sidemeu = document.getElementById('sidemenu');

function openmenu(){
    sidemeu.style.right='0';
}
function closemenu(){
    sidemeu.style.right='-200%';
}