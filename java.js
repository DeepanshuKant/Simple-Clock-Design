let a;
let hour;
let minutes;
let second;
let dates;
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
setInterval(()=>{
a=new Date();
hour=a.getHours();
document.getElementById('hour').innerHTML=hour;
}, 1000)

setInterval(()=>{
    a=new Date();
    minutes=a.getMinutes();
    document.getElementById('minute').innerHTML=minutes;
}, 1000)

setInterval(()=>{
    a=new Date();

    second=a.getSeconds();
    document.getElementById('second').innerHTML=second;
}, 1000)

setInterval(()=>{
    let b=new Date();
    dates=b.toLocaleDateString(undefined, options);
    let dayy=document.getElementById('day');
    dayy.innerHTML = dates;
}, 1000)

