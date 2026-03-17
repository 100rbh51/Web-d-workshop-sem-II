.container{

background-color: rgb(219, 221, 225);

text-align: center;

padding: 30px;

margin: 150px;

display: block;

align-items: center;

border-radius: 10px;

}

.button{

background-color: rgb(62, 62, 180);

color: white;

height: 35px;

width: 100px;

border-radius: 8px;

}

.button:hover{

background-color: red;

}function calculateresult(){

let n=document.getElementById("subjects").value;

let total=0;

for (let i=1;i<=n;i++){

let marks=parseFloat(prompt("enter marks for subject"+i));

total=total+marks;

}

let average=total/n;

let grade;

let result;

if(average>=90){

grade=" A+";

result=" Pass";

}

else if(average>=75){

grade=" A";

result=" Pass";

}

else if(average>=60){

grade=" B";

result=" Pass";

}

else if(average>=50){

grade=" C";

result=" Pass";

}

else if(average>=40){

grade=" D";
result=" Pass";

}

else {

result=" Fail";

}

document.getElementById("result").innerHTML="Total Marks :"+ total + "<br>" + "Average

Marks:" + average.toFixed(2) + "<br>" + "grade" + grade + "<br>" + "result" +result;;

