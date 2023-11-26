let count = 0;
pName = window.localStorage.getItem("name");
console.log(pName);

blur(0);

let names = [pName, "남주혁", " "];

// 플레이어(치악이)
let chiak_log = ["오늘은 집에 데려다 줄게.", "가자", "꼬맹아.", "너...!", "꼬맹이 아니라니까...", "알겠어", "ㅎ", "(집앞)",
                "가기 전에..", "자...!", "이거 먹어", "이게 뭔데?", "마카롱.", "오늘 힘든 일 많았으니까.", "이거 먹고 힘내! 꼬맹이",
                "고마워..."];


let chiak_moniter = "image_liquid/nothing.PNG";
let mainMan_face = ["image_liquid/mainMan_default.PNG", "image_liquid/mainMan_look.PNG",
                    "image_liquid/mainMan_shy.PNG", "image_liquid/mainMan_surprise.PNG", "image_liquid/mainMan_happy.PNG"];
let v1_face =["image_liquid/v1_coy.png", "image_liquid/v1_angry.png"];


let places=["screen_image/18_alleyway2.jpg", "screen_image/19_ggagga2.jpg"];

let link = ["Choose4.html"];

function toggleImg(){
  const subs = document.getElementById('talks');

  if (chiak_log[count]==undefined) subs.innerText="Loading...";
  else subs.innerText= chiak_log[count];


  if(count==0){
    name(1);
    mainMan(0);
  }
  if(count==1) mainMan(4);
  if(count==3)name(0);
  if(count==5) {
    name(1);
    mainMan(0);
  }
  if(count==6) mainMan(4);
  if(count==7){
    name(2);
    place(0);
    chiakFace();
  }
  if(count==8){
    name(1);
    mainMan(0);
  }
  if(count==9) {
    mainMan(4);
    blur(1);
  }
  if(count==10) mainMan(0);
  if(count==11) name(0);
  if(count==12) name(1);
  if(count==14) mainMan(4);
  if(count==15) {
    name(0);
    mainMan(0);
  }
  if(count==16) pass(0);




  count++;
}


function blur(num){
  if(num==0) document.getElementById("blur").style.display = "none";
  if(num==1) document.getElementById("blur").style.display = "block";

}

function name(a){
  const nameBox = document.getElementById("nameName");
  nameBox.innerText = names[a];
}


function chiakFace(){
  document.getElementById("people").src=chiak_moniter;
}
function mainMan(face){
  document.getElementById("people").src=mainMan_face[face];
}
function v1(face){
  document.getElementById("people").src=v1_face[face];
}

function place(num){
  document.getElementById("backpicter").src=places[num];

}

function pass(num){
  location.href = link[num];
}
