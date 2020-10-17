
var textItems = document.getElementsByClassName("text-item");
var photoItems = document.getElementsByClassName("photo-item");

var x=0;
var y=0

document.getElementById("left-arrow").style.display = "none";

function rightControl(){
    textRight();
    photoRight();
}

function leftControl(){
    textLeft();
    photoLeft();
}

function textRight(){
    if (x>0){
        document.getElementById("home-btn").style.display = "none";
        document.getElementById("left-arrow").style.display = "initial";

        textItems[x-1].classList.add("hidden");
        textItems[x].classList.remove("hidden");
        x++;
        if (textItems.length==x){
            document.getElementById("right-arrow").style.display = "none";
            document.getElementById("home-btn-right").style.display = "initial";
        }
    }else{
        document.getElementById("home").style.display = "none";
        document.getElementById("main").style.display = "flex";
        textItems[x].classList.remove("hidden");
        document.getElementById("left-arrow").style.display = "none";
        x++;
        if(x==1){
        document.getElementById("home-btn").style.display = "initial";
        }
    }
}

function textLeft(){
    if (x>0){
        document.getElementById("home-btn-right").style.display = "none";
        document.getElementById("right-arrow").style.display = "initial";
        x--;
        textItems[x].classList.add("hidden");
        textItems[x-1].classList.remove("hidden");
        if (x==1){
            document.getElementById("left-arrow").style.display = "none";
            document.getElementById("home-btn").style.display = "initial";
        }
    }  
}

function photoRight(){
    if (y>0){
        photoItems[y-1].classList.add("hidden");
        photoItems[y].classList.remove("hidden");
        y++;
    }else{
        photoItems[y].classList.remove("hidden");
        return y++;
    }
}

function photoLeft(){
    if (y>0){
        y--;
        photoItems[y].classList.add("hidden");
        photoItems[y-1].classList.remove("hidden");
    }
}