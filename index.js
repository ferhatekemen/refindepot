function bodycontent(){
    document.getElementById("sliders").style.display="initial";
    document.getElementById("body-content").style.display="flex";
    document.getElementById("aboutus").style.display="none";
    document.getElementById("referenceletter").style.display="none";
    document.getElementById("resume").style.display="none";
    document.getElementById("contact1").style.display="none";
    document.getElementById("contact2").style.display="none";
    document.getElementById("main-content").style.display="initial";
    document.getElementById("sidebar-homepage-right").style.display="initial";
    document.getElementById("intro-principal1").style.display="initial";
    document.getElementById("intro1").style.display="none";
    document.getElementById("intro2").style.display="none"
    document.getElementById("intro3").style.display="none"
    document.getElementById("intro4").style.display="none"
}

function aboutus(){
    document.getElementById("sliders").style.display="none";
    document.getElementById("body-content").style.display="none";
    document.getElementById("aboutus").style.display="block";
    document.getElementById("referenceletter").style.display="none";
    document.getElementById("resume").style.display="none";
    document.getElementById("contact1").style.display="none";
    document.getElementById("contact2").style.display="none";
    }

function referenceletter(){
document.getElementById("sliders").style.display="none";
document.getElementById("body-content").style.display="none";
document.getElementById("aboutus").style.display="none";
document.getElementById("referenceletter").style.display="block";
document.getElementById("resume").style.display="none";
document.getElementById("contact1").style.display="none";
document.getElementById("contact2").style.display="none";
}

function resume(){
document.getElementById("sliders").style.display="none";
document.getElementById("body-content").style.display="none";
document.getElementById("aboutus").style.display="none";
document.getElementById("referenceletter").style.display="none";
document.getElementById("resume").style.display="block";
document.getElementById("contact1").style.display="none";
document.getElementById("contact2").style.display="none";
}

function contact(){
    document.getElementById("sliders").style.display="none";
    document.getElementById("body-content").style.display="none";
    document.getElementById("aboutus").style.display="none";
    document.getElementById("referenceletter").style.display="none";
    document.getElementById("resume").style.display="none";
    document.getElementById("contact1").style.display="block";
    document.getElementById("contact2").style.display="block";
}

var count=0;
function snext(){
if(count===0){
    count+=1;
    document.getElementById("slidepanel").style.right="100%";
}
else if(count===1){
    count+=1;
    document.getElementById("slidepanel").style.right="200%";
}
else if(count===2){
    count+=1;
    document.getElementById("slidepanel").style.right="300%";
}
else {
    document.getElementById("slidepanel").style.right="400%";
}
}

function sprev(){
    if(count===3){
        count-=1;
        document.getElementById("slidepanel").style.right="300%";
    }
    else if(count===2){
        count-=1;
        document.getElementById("slidepanel").style.right="200%";
    }
    else if(count===1){
        count-=1;
        document.getElementById("slidepanel").style.right="100%";
    }
    else {
        document.getElementById("slidepanel").style.right="0%";
    }
    }

function academy(){
    document.getElementById("sliders").style.display="none";
    document.getElementById("aboutus").style.display="none";
    document.getElementById("referenceletter").style.display="none";
    document.getElementById("resume").style.display="none";
    document.getElementById("contact1").style.display="none";
    document.getElementById("contact2").style.display="none";
    document.getElementById("main-content").style.display="none";
    document.getElementById("sidebar-homepage-right").style.display="none";
    document.getElementById("intro-principal1").style.display="none";
    document.getElementById("intro1").style.display="initial";
    document.getElementById("intro2").style.display="initial"
    document.getElementById("intro3").style.display="initial"
    document.getElementById("intro4").style.display="initial"
}

function refmekko(){
    document.getElementById("hidehide").style.display="flex";
    document.getElementById("hidehidep").style.display="block";
    document.getElementById("refmekko").style.display="none";
    document.getElementById("refmekkoc").style.display="initial";
    event.preventDefault();
}

function refmekkoc(){
    document.getElementById("hidehide").style.display="none";
    document.getElementById("hidehidep").style.display="none";
    document.getElementById("refmekko").style.display="initial";
    document.getElementById("refmekkoc").style.display="none";
    event.preventDefault();
}

function refmekol(){
    document.getElementById("accordion1").style.display="initial";
    document.getElementById("refmekol").style.display="none";
    document.getElementById("refmekolc").style.display="initial";
    event.preventDefault();
}

function refmekolc(){
    document.getElementById("accordion1").style.display="none";
    document.getElementById("refmekol").style.display="initial";
    document.getElementById("refmekolc").style.display="none";
    event.preventDefault();
}


function refletil(){
    document.getElementById("accordion2").style.display="initial";
    document.getElementById("refletil").style.display="none";
    document.getElementById("refletilc").style.display="initial";
    event.preventDefault();
}

function refletilc(){
    document.getElementById("accordion2").style.display="none";
    document.getElementById("refletil").style.display="initial";
    document.getElementById("refletilc").style.display="none";
    event.preventDefault();
}

function ozharef(){
    document.getElementById("accordion3").style.display="initial";
    document.getElementById("ozharef").style.display="none";
    document.getElementById("ozharefc").style.display="initial";
    event.preventDefault();
}

function ozharefc(){
    document.getElementById("accordion3").style.display="none";
    document.getElementById("ozharef").style.display="initial";
    document.getElementById("ozharefc").style.display="none";
    event.preventDefault();
}

function cvile(){
    document.getElementById("accordion4").style.display="initial";
    document.getElementById("cvile").style.display="none";
    document.getElementById("cvilec").style.display="initial";
    event.preventDefault();
}

function cvilec(){
    document.getElementById("accordion4").style.display="none";
    document.getElementById("cvile").style.display="initial";
    document.getElementById("cvilec").style.display="none";
    event.preventDefault();
}

function ozsu(){
    document.getElementById("accordion5").style.display="initial";
    document.getElementById("ozsu").style.display="none";
    document.getElementById("ozsuc").style.display="initial";
    event.preventDefault();
}

function ozsuc(){
    document.getElementById("accordion5").style.display="none";
    document.getElementById("ozsu").style.display="initial";
    document.getElementById("ozsuc").style.display="none";
    event.preventDefault();
}
