var deg=6
var hr=document.getElementById("hr")
var mn=document.getElementById("mn")
var sc=document.getElementById("sc")
setInterval(() => {
  var date= new Date()
  var hh= date.getHours() *30 
  var mm= date.getMinutes() *deg
  var ss= date.getSeconds() *deg 
  hr.style.transform= `rotateZ(${hh+(mm/12)}deg)` 
  mn.style.transform= `rotateZ(${mm}deg)` 
  sc.style.transform= `rotateZ(${ss}deg)` 
});


