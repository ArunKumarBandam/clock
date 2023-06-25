
let time1=document.querySelector('.time');
let pri=0;
setInterval(()=>{
let date = new Date();
let h=date.getHours();
let m=date.getMinutes();
let s=date.getSeconds();
let d=date.getDate();
if(h<=12){
   
pri=h +':'+m+':'+s+' ';
time1.innerHTML=pri;
}else{
    pri=(h-12)+':'+m+':'+s+'s ';
    time1.textContent=pri;
}

},1000)
