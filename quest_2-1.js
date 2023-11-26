let count = 0;

see(0);

pName = window.localStorage.getItem("name");
const nameBox = document.getElementById("nameName");
nameBox.innerText = pName;




const list = ["미니게임~", "음주에 관한 문제"];

function quests(){
  const text = document.getElementById('quest~');

  if (list[count]==undefined) text.innerText=" ";
  else text.innerText= list[count];

  if(count >=2) {
    text.innerText = "1. 술을 많이 마셔서 나중에는 술이 없으면 견디지 못하는 현상을 알콜 중독이라고 한다..";
    see(1);
    count= 2;
  }

  count++;
}


function result(r){
  if(r=='t'){
    location.href="YesOrNo_2-2.html";
  }
  if(r=='f'){
    location.href = "death.html";
    window.localStorage.setItem("death", 3);

  }
}


function see(num){
  if(num==0) document.getElementById("trueButton").style.display = "none";
  if(num==1) document.getElementById("trueButton").style.display = "block";

  if(num==0) document.getElementById("falseButton").style.display = "none";
  if(num==1) document.getElementById("falseButton").style.display = "block";

}
