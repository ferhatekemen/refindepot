var opened=0;

function openmenu1(){
        event.preventDefault();
        if(opened===0){
            opened+=1;
            document.getElementById("nav-main").style.visibility="visible";
            document.getElementById("nav-main").style.height="34vw";
        }
        else{
            opened-=1;
            document.getElementById("nav-main").style.visibility="hidden";
            document.getElementById("nav-main").style.height="0";
            }
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

else if(count===3){
    count+=1;
    document.getElementById("slidepanel").style.right="400%";
}

else {
    count=0;
    document.getElementById("slidepanel").style.right="0%";
}
}

function sprev(){
    if(count===4){
        count-=1;
        document.getElementById("slidepanel").style.right="300%";
    }

    else if(count===3){
        count-=1;
        document.getElementById("slidepanel").style.right="200%";
    }
    else if(count===2){
        count-=1;
        document.getElementById("slidepanel").style.right="100%";
    }
    else {
        count=0;
        document.getElementById("slidepanel").style.right="0%";
    }
    }

    (function cc() {
        setInterval(snext, 4000)
    })();


 function openp1(){
     event.preventDefault();
     document.getElementById("popups").style.display="block";
     document.getElementById("popups").style.background="rgba(255, 255, 255, .8)";
     document.getElementById("pop1").style.display="block";
 }

 function openp2(){
    event.preventDefault();
    document.getElementById("popups").style.display="block";
    document.getElementById("popups").style.background="rgba(255, 255, 255, .8)";
    document.getElementById("pop2").style.display="block";
}

function openp3(){
    event.preventDefault();
    document.getElementById("popups").style.display="block";
    document.getElementById("popups").style.background="rgba(255, 255, 255, .8)";
    document.getElementById("pop3").style.display="block";
}

function openp4(){
    event.preventDefault();
    document.getElementById("popups").style.display="block";
    document.getElementById("popups").style.background="rgba(255, 255, 255, .8)";
    document.getElementById("pop4").style.display="block";
}


function openp5(){
    event.preventDefault();
    document.getElementById("popups").style.display="block";
    document.getElementById("popups").style.background="rgba(255, 255, 255, .8)";
    document.getElementById("pop5").style.display="block";
}

function openp6(){
    event.preventDefault();
    document.getElementById("popups").style.display="block";
    document.getElementById("popups").style.background="rgba(255, 255, 255, .8)";
    document.getElementById("pop6").style.display="block";
}


 function closepop(){
    event.preventDefault();
    document.getElementById("popups").style.display="none";
    document.getElementById("pop1").style.display="none";
    document.getElementById("pop2").style.display="none";
    document.getElementById("pop3").style.display="none";
    document.getElementById("pop4").style.display="none";
    document.getElementById("pop5").style.display="none";
    document.getElementById("pop6").style.display="none";

 }

var refmekko1=0;
function refmekko(){
    if(refmekko1===0){
        refmekko1+=1;
        document.getElementById("hidehide").style.display="flex";
        document.getElementById("hidehidep").style.display="block";
        document.getElementById("refmekko").style.display="none";
        document.getElementById("refmekkoc").style.display="initial";
    }

    else{
        refmekko1=0;
        document.getElementById("hidehide").style.display="none";
        document.getElementById("hidehidep").style.display="none";
        document.getElementById("refmekko").style.display="initial";
        document.getElementById("refmekkoc").style.display="none";

    }
}

var refmekol1=0;
function refmekol(){
    if(refmekol1===0){
        refmekol1+=1;
        document.getElementById("accordion1").style.display="initial";
        document.getElementById("refmekol").style.display="none";
        document.getElementById("refmekolc").style.display="initial";
    }
    else{
        refmekol1=0;
        document.getElementById("accordion1").style.display="none";
        document.getElementById("refmekol").style.display="initial";
        document.getElementById("refmekolc").style.display="none";

    }
}

var refletil1=0;
function refletil(){
    if(refletil1===0){
        refletil1+=1;
        document.getElementById("accordion2").style.display="initial";
        document.getElementById("refletil").style.display="none";
        document.getElementById("refletilc").style.display="initial";    
    }

    else{
        refletil1=0;
        document.getElementById("accordion2").style.display="none";
        document.getElementById("refletil").style.display="initial";
        document.getElementById("refletilc").style.display="none";    
    }
}

var ozharef1=0;
function ozharef(){
    if(ozharef1===0){
        ozharef1+=1;
        document.getElementById("accordion3").style.display="initial";
        document.getElementById("ozharef").style.display="none";
        document.getElementById("ozharefc").style.display="initial";
    }
    else{
        ozharef1=0;
        document.getElementById("accordion3").style.display="none";
        document.getElementById("ozharef").style.display="initial";
        document.getElementById("ozharefc").style.display="none";
    }
}

var cvile1=0;
function cvile(){
    if(cvile1===0){
        cvile1+=1;
        document.getElementById("accordion4").style.display="initial";
        document.getElementById("cvile").style.display="none";
        document.getElementById("cvilec").style.display="initial";    
    }
    else{
        cvile1=0;
        document.getElementById("accordion4").style.display="none";
        document.getElementById("cvile").style.display="initial";
        document.getElementById("cvilec").style.display="none";
    }
}

var ozsu1=0;
function ozsu(){
    if(ozsu1===0){
        ozsu1+=1;
        document.getElementById("accordion5").style.display="initial";
        document.getElementById("ozsu").style.display="none";
        document.getElementById("ozsuc").style.display="initial";
    }
    else{
        ozsu1=0;
        document.getElementById("accordion5").style.display="none";
        document.getElementById("ozsu").style.display="initial";
        document.getElementById("ozsuc").style.display="none";
    }
}

function editing1(){
    document.getElementById("reso11").style.display="none";
    document.getElementById("reso111").style.display="initial"

}

function editing1c(){
    document.getElementById("reso111").style.display="none";
    document.getElementById("reso11").style.display="initial";
}

function editing2(){
    document.getElementById("reso222").style.display="initial";
    document.getElementById("reso22").style.display="none";
}

function editing2c(){
    document.getElementById("reso22").style.display="initial";
    document.getElementById("reso222").style.display="none";
}

function editing3(){
    document.getElementById("reso33").style.display="none";
    document.getElementById("reso333").style.display="initial";

}

function editing3c(){
    document.getElementById("reso33").style.display="initial";
    document.getElementById("reso333").style.display="none"

}