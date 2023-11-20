const   btnGenerate=document.getElementById("btn-generate");
const inputFeild=document.getElementById("input-feild");
let imgBox=document.getElementById("imgBox");
let qrimage=document.getElementById("qrimage");
let URL="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function QRCodeGeneration(){
   let Inputvalue=inputFeild.value;
   if(Inputvalue == ''){
     alert("Please enter Text or URL in the input Feild");
   }
    qrimage.src=URL + Inputvalue ;
    console.log("Code generated successfully");

}