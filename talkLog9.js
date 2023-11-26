let count = 0;
pName = window.localStorage.getItem("name");
console.log(pName);

blur(0);

let names = [pName, "남주혁", "선생님", "서민규", "큐운짱-★(교장)", " "];

// 플레이어(치악이)
let chiak_log = ["너희 이럴거니!", "에휴...", "따라왓!", "이름이 뭐니?", "서민규요.",
                "구해주셔서 감사합니다..", "수고했어.", "(얼굴이 빨개진다)",
                "자!", "이제 가자!", "(" +pName+"를(을) 쓰담으며)", "잘했어~"];

let chiak_moniter = "image_liquid/nothing.PNG";
let mainMan_face = ["image_liquid/mainMan_default.PNG", "image_liquid/mainMan_look.PNG",
                    "image_liquid/mainMan_shy.PNG", "image_liquid/ma inMan_surprise.PNG",
                    "image_liquid/mainMan_happy.PNG", "image_liquid/mainMan_look.PNG", "image_liquid/mainMan_ice.PNG",
                  "image_liquid/mainMan_notFace.PNG"];
let subMan2_face = ["image_liquid/subMan2_hurt.png", "image_liquid/subMan2_default.png",
                    "image_liquid/subMan2_funny.png", "image_liquid/subMan2_surprise.png"];

let places=["screen_image/black.jpg", "screen_image/11_secretForest2.jpg"];

let link = ["Choose7.html"];

function toggleImg(){
  const subs = document.getElementById('talks');

  if (chiak_log[count]==undefined) subs.innerText="Loading...";
  else subs.innerText= chiak_log[count];

  if(count==0) name(2);
  if(count==3) name(0);
  if(count==4) {
    sub2(0);
    name(3);
  }
  if(count==6) {
    sub2(3);
    name(0);
  }
  if(count==7) {
    sub2(1);
    name(5);
  }
  if(count==8){
    name(1);
    mainMan(4);
  }
  if(count==9) mainMan(0);
  if(count==10) {
    name(5);
    place(0);
  }
  if(count==11) {
    mainMan(4);
    name(1);
  }
  if(count==12){
    pass(0);
  }
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
function sub2(face){
  document.getElementById("people").src=subMan2_face[face];
}

function place(num){
  document.getElementById("backpicter").src=places[num];

}

function pass(num){
  location.href = link[num];
}
