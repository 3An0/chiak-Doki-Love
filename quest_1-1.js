let count = 0;

see(0);

pName = window.localStorage.getItem("name");
const nameBox = document.getElementById("nameName");
nameBox.innerText = pName;




const list = ["미니게임 시작~~~", "흡연에 관한 문제 맞추기!!!"];

function quests(){
  const text = document.getElementById('quest~');

  if (list[count]==undefined) text.innerText=" ";
  else text.innerText= list[count];

  if(count >=2) {
    text.innerText = "1. 어릴 때 담배를 피우면 어른이 되어서 시작한 것보다 훨씬 해롭다.";
    see(1);
    count= 2;
  }

  count++;
}


function result(r){
  if(r=='t'){
    location.href="YesOrNo_1-2.html";
  }
  if(r=='f'){
    location.href = "death.html";
    window.localStorage.setItem("death", 1);

  }
}


function see(num){
  if(num==0) document.getElementById("trueButton").style.display = "none";
  if(num==1) document.getElementById("trueButton").style.display = "block";

  if(num==0) document.getElementById("falseButton").style.display = "none";
  if(num==1) document.getElementById("falseButton").style.display = "block";

}
