const Location = [];
//console.log(Location);
function locate(){
 var country = document.getElementById("inpCountry");
 var locCountry = country.value;    
 var state = document.getElementById("inpState");
 var locState = state.value; 
 var city = document.getElementById("inpCity");
 var locCity = city.value;     
 var continent = document.getElementById("inpCont");
 var locCont = continent.value;    
 
    fullstat = locCountry + locState + locCity + locCont;
 document.getElementById("rsl").innerHTML = fullstat;
    //console.log(fullstat);
    Location.push(fullstat);
    console.log(Location);
  }
var locBtn = document.body.querySelector('button');
locBtn.style.color =" blue";
console.log(Location)
locBtn.addEventListener('click',locate);



 

