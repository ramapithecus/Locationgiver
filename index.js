const Location = [];
//const Delegation = {};

function locate(){
 var country = document.getElementById("inpCountry");
 var locCountry = country.value;    
 var state = document.getElementById("inpState");
 var locState = state.value; 
 var city = document.getElementById("inpCity");
 var locCity = city.value;     
 var continent = document.getElementById("inpCont");
 var locCont = continent.value;    
 var fullstat =[];
//pushes    
    fullstat.push(locCountry);
    fullstat.push(locState);
    fullstat.push(locCity);
    fullstat.push(locCont);
    fullstat.join(', ')
    // fullstat = locCountry + locState + locCity + locCont;
 document.getElementById("rsl").innerHTML = fullstat;
    //console.log(fullstat);
    Location.unshift(fullstat);
    console.log(Location);
  }
var locBtn = document.body.querySelector('button');
locBtn.style.color =" blue";
console.log(Location)
locBtn.addEventListener('click',locate);



 

