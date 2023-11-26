let count = 0;


// 플레이어(치악이)
let chiak_log = ["안녕?", "난 이번 학생회장인", "데헷-★", "",
            "학생회장이 된 나의 주요 공약은",  "1. 술, 담배 냄새 없는 학교 만들기!",
              "2. 학교폭력 없는 학교 만들기! 이지.", "그렇다면 이 공약을 시행하러 가볼까???",
              "(next page...)"];
let chiak_moniter = "image_liquid/nothing.png";
let link = ["pass1.html"];

function toggleImg(){
  const subs = document.getElementById('talks');

  if (chiak_log[count]==undefined) subs.innerText="Loading...";
  else subs.innerText= chiak_log[count];

  if(count==2){
    chiakFace(1);
    whatYouName();
  }

  if(count==8){
    const nameBox = document.getElementById("nameName");
    nameBox.innerText = " ";
  }

  if(count==9){
    pass(0);
  }

  count++;
}


function chiakFace(face){
  if (face == 1) document.getElementById("player").src=chiak_moniter;
}




function whatYouName(){

  let pName = prompt("이름을 입력하세요", "치악이");
  const nameBox = document.getElementById("nameName");
  nameBox.innerText = pName;
  console.log(pName);
  chiak_log[3] = pName + " (이)야.";
  window.localStorage.setItem("name", pName);

  return pName;
}


function pass(num){
  location.href = link[num];
}
