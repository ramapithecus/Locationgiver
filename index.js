const placeNum= [];
const Delocation = {};
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
if(locCountry!== ''){
    fullstat.push(locCountry);
}
   if(locState!== ''){
       fullstat.push(locState);
   }
    if(locCity!== ''){
    fullstat.push(locCity);
    }
     if(locCont!== ''){
         fullstat.push(locCont);
 }
    //fullstat.join("+");

 document.getElementById("rsl").innerHTML = fullstat.join('+');
    console.log(fullstat);
    placeNum.push(fullstat);
    //placeNum.join(' + ');
    //console.log(placeNum);
  }
var locBtn = document.body.querySelector('button');
locBtn.style.color =" blue";
//console.log(placeNum);
locBtn.addEventListener('click',locate);



 

