
function lower(a){
    Array.from(a).forEach(el=>{
        el.textContent=el.textContent.toLowerCase()
    })
    return a;
}
function upper(a){
    Array.from(a).forEach(el=>{
        el.textContent=el.textContent.toUpperCase()
    })
    return a
}
function symbel(a,b,c,d){
    c.style.display="inline";
    c.textContent=d;
    for(let i=0;i<a.length;i++){
b[i].textContent=a[i];
    }
}
function alp(a,b,c){
    c.style.display="none";
    for(let i=0;i<a.length;i++){
        b[i].textContent=a[i]
    }
}
function Ex(a){
    Array.from(a).forEach(el=>{
        el.style.backgroundColor="transparent";
        el.style.border="3px solid black"
        el.style.borderRadius="7px"
        el.style.color="black"
        el.style.fontWeight = "bold";
    })
}//for change hole background of button
//94.	Write code to implement a virtual keyboard: clicking <button class="key"> inserts its text into <input id="textBox">.
let a=["+","×","÷","=","/","_","<",">","[","]","!","@","#","₹","%","^","&","*","(","-","'","\"",":",";",",","?"]
let alpha=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
let a2=[",", "~", "\\", "|", "{", "}", "€", "£", "¥", "$", "°", "•", "○", "●", "□", "■", "♤", "♡", "◇","☆", "▪︎", "¤", "《", "》", "¡", "¿"]
let rbrakit=")";
let tree="♧";

const main=document.getElementById("maindiv")
const inpu=document.getElementById("textBox")
const keys=document.querySelectorAll(".key")
const cross=document.getElementById("cross")
const space=document.getElementById("space")
const symbol=document.getElementById("symbol")
const comma=document.getElementById("comma");
const dot=document.getElementById("dot");
const cap=document.getElementById("cap");
const addi=document.getElementById("additional");
addi.addEventListener("click",()=>{
    inpu.value+=addi.textContent;
})
cap.addEventListener("click",()=>{
   if(cap.textContent=="⇩"){//upper case        {
cap.textContent="⇧";
lower(keys)
        }else if(cap.textContent=="1/2"){
            cap.textContent="2/2"
             symbel(a2,keys,addi,tree)
              
        }
        else if(cap.textContent=="2/2"){
            cap.textContent="1/2"
            symbel(a,keys,addi,rbrakit) 
        }
        else{
           cap.textContent="⇩"
           upper(keys) 
        }
})
symbol.addEventListener("click",()=>{
    if(symbol.textContent=="!#1"){
         symbel(a,keys,addi,rbrakit)
         symbol.textContent="ABC"
         cap.textContent="1/2";
    }else{
        symbol.textContent="!#1"
        alp(alpha,keys,addi)
         cap.textContent="⇩"
    }
})
dot.addEventListener("click",()=>{
   inpu.value+=dot.textContent; 
})
comma.addEventListener("click",()=>{
   inpu.value+=comma.textContent;  
})
let valid;
cross.addEventListener("click",()=>{
    inpu.value=inpu.value.slice(0,-1);
})
cross.addEventListener("mousedown",()=>{
valid=setInterval(()=>{
 inpu.value=inpu.value.slice(0,-1);
},200)
cross.addEventListener("mouseup",()=>clearInterval(valid))
cross.addEventListener("mouseleave",()=>clearInterval(valid))
})

space.addEventListener("click",()=>{
   inpu.value+=" ";  
})

Array.from(keys).forEach(key=>{
    key.addEventListener("click",()=>{
 inpu.value+=key.textContent;
})}) 
const back=document.getElementById("background");
back.addEventListener("click",()=>{
    if(back.textContent=="☽"){
back.style.backgroundColor="white"
back.style.color="black";
back.textContent="☀︎";
document.body.style.backgroundColor="black"
document.body.style.color="white"
}else{
    back.textContent="☽"
    back.style.backgroundColor="black"
    back.style.color="white";
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
}
})
//background color of key board div st

const mainb=document.querySelector("#mainb")
const keyb=document.querySelectorAll(".keybBtn");
const Cex=document.querySelectorAll(".ex")
const keyc=document.getElementById("keyC");
const blank=document.getElementById("blank")//make font default

let w=0
Array.from(keyb).forEach(kb=>{
    kb.addEventListener("click",(e)=>{
        let im=window.getComputedStyle(kb).backgroundImage
        main.style.backgroundImage=im;
        ++w
        
        if(w==1){Ex(Cex);keyc.style.display="inline";blank.style.display="inline";}
    })
})
keyc.addEventListener("click",()=>{
    if(keyc.textContent=="white"){
        Array.from(Cex).forEach(el=>{
  el.style.border="3px solid white";
        el.style.color="white";
        }) 
        keyc.textContent="black";
    }else{
       Array.from(Cex).forEach(el=>{
   el.style.border="3px solid black"
        el.style.color="black"
       }) 
  keyc.textContent="white";   
    }
})
blank.addEventListener("click",()=>{
    w=0
    blank.style.display="none"
    keyc.textContent="white"
    keyc.style.display="none"
         main.style.backgroundImage="none";
         Array.from(Cex).forEach(el=>{
        el.style.backgroundColor="";
        el.style.border=""
        el.style.borderRadius=""
        el.style.color=""
        el.style.fontWeight = "";
         })
})

//background color of keyboard div end
