function addNewWEfield(){
  //console.log("hlo");
   let newnode= document.createElement("textarea");
  newnode.classList.add("form-control");
  newnode.classList.add("wefield");
   newnode.classList.add("mt-2");
  newnode.setAttribute("rows", 3);
  newnode.setAttribute("placeholder", "Enter here")
    
   let weob= document.getElementById("we");
   let weAddbuttonob = document.getElementById("weAddButton");

   weob.insertBefore(newnode, weAddbuttonob);


}

function addNewAQfield(){

   let newnode1= document.createElement("textarea");
    newnode1.classList.add("form-control");
    newnode1.classList.add("eqfield");
   newnode1.classList.add("mt-2")
  newnode1.setAttribute("rows", 3);
  newnode1.setAttribute("placeholder", "Enter here")
    
   let weob1= document.getElementById("weaddbutton");
   let weAddbutton1 = document.getElementById("aqaddbutton");

  weob1.insertBefore(newnode1, weAddbutton1);


}



//

function addNewfield(){
 
   let yes= document.getElementById("namefield").value;
   let no= document.getElementById("n1");
   no.innerHTML= yes;

   document.getElementById("t1").innerHTML=yes;

   let yes1= document.getElementById("contactfield").value;
   let no1= document.getElementById("n2");
   no1.innerHTML= yes1;


   //direct in simplay way using _____.innerhtml=______;

   document.getElementById("n3").innerHTML=document.getElementById("addressfield").value;
   

   document.getElementById("f1").innerHTML=document.getElementById("linkedfield").value;
 
   document.getElementById("f2").innerHTML=document.getElementById("facebookfield").value;
   
   document.getElementById("f3").innerHTML=document.getElementById("instafield").value;

   document.getElementById("o1").innerHTML=document.getElementById("objectivefield").value;



   // for work experiences-----using loop


   let abc= document.getElementsByClassName("wefield");

   let str= "";

   for (let e of abc) {
      str += `<li>${e.value}</li>`;
   }

   document.getElementById("w1").innerHTML= str;
    
   
//------  academic qualification-------------------


let bee= document.getElementsByClassName("eqfield");

let str1= "";

for (let e of bee) {
   str1 += `<li> ${e.value} </li>`;
}

document.getElementById("uy").innerHTML= str1;



document.getElementById("cv-form").style.display="none";
document.getElementById("cv-template").style.display="block";
   
}

   //   print cv-------

   function printcv(){

      window.print();
   }