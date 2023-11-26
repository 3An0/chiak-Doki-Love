let count = 0;
pName = window.localStorage.getItem("name");
console.log(pName);

blur(0);

let names = [pName, "남주혁", "선생님", "큐운짱★ (교장)", " "];

// 플레이어(치악이)
let chiak_log = ["(양아치 친구들은 호되게 혼났다고 한다.)", "(하굣길)", "여이~", "남주혁!!", "같이 가자",
                  "오늘 진짜 수고했다.", "뭘~!", "그리고 내가 건 공약을 지키고 있는 것 같아서 좋아!",
                  "으이구", "하여튼", "헤헤", "그나저나 서민규가 걱정이네", "...", "괜찮겠지", "(시간이 흐르고..)",
                "(어느날)", "위 학생은 학교를 위해", "~~~~~~~~~~~", "하였음으로 이 상장을 수여합니다.",
                  "감사합니다.", "(그렇게 여주는 훌륭하게 학생회장의 역할을 수행하고 멋진 학교를 만들었습니다~)"];

let chiak_moniter = "image_liquid/nothing.PNG";
let mainMan_face = ["image_liquid/mainMan_default.PNG", "image_liquid/mainMan_look.PNG",
                    "image_liquid/mainMan_shy.PNG", "image_liquid/ma inMan_surprise.PNG",
                    "image_liquid/mainMan_happy.PNG", "image_liquid/mainMan_look.PNG", "image_liquid/mainMan_ice.PNG",
                  "image_liquid/mainMan_notFace.PNG"];

let places=["screen_image/black.jpg", "screen_image/10_Stage2.jpg", "screen_image/6_inStairsUp1.jpg"];

let link = ["Choose7.html"];

function toggleImg(){
  const subs = document.getElementById('talks');

  if (chiak_log[count]==undefined) subs.innerText="Loading...";
  else subs.innerText= chiak_log[count];

  if(count==2) name(0);
  if(count==3) mainMan(1);
  if(count==4) mainMan(0);
  if(count==5) {
    name(1);
    mainMan(4);
  }
  if(count==6) {
    name(0);
    mainMan(0);
  }
  if(count==7) mainMan(4);
  if(count==8) name(1);
  if(count==9) mainMan(0);
  if(count==10) name(0);
  if(count==12) {
    name(1);
    mainMan(7);
  }
  if(count==13) mainMan(0);
  if(count==14) {
    chiakFace();

    place(0);
    name(4);
  }
  if(count==16){
    name(3);
    place(1);
  }
  if(count==19) name(0);
  if(count==20) name(4);

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
