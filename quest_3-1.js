let count = 0;

see(0);

pName = window.localStorage.getItem("name");
const nameBox = document.getElementById("nameName");
nameBox.innerText = pName;




const list = ["미니게임~", "학교폭력 예방 관련 문제"];

function quests(){
  const text = document.getElementById('quest~');

  if (list[count]==undefined) text.innerText=" ";
  else text.innerText= list[count];

  if(count >=2) {
    text.innerText = "1. 친구가 학교폭력을 당하는 것을 발견했을 때 117에 신고하면 된다.";
    see(1);
    count= 2;
  }

  count++;
}


function result(r){
  if(r=='t'){
    location.href="YesOrNo_3-2.html";
  }
  if(r=='f'){
    location.href = "death.html";
    window.localStorage.setItem("death", 8);

  }
}


function see(num){
  if(num==0) document.getElementById("trueButton").style.display = "none";
  if(num==1) document.getElementById("trueButton").style.display = "block";

  if(num==0) document.getElementById("falseButton").style.display = "none";
  if(num==1) document.getElementById("falseButton").style.display = "block";

}
