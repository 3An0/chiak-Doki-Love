let count = 0;
pName = window.localStorage.getItem("name");
console.log(pName);

blur(0);

let names = [pName, "남주혁", "이한결", "서민규", "김지호", "안정아", " "];

// 플레이어(치악이)
let chiak_log = ["(점심시간)", "오늘 급식...별로다...", "매점 갈까..말까...",
                  "("+pName+"가(이) 로비를 서성인다)", "저기..", "선배...", "이거 드세욧..!",
                "ㅇ..어..?", "저.. 저기!", "("+pName+"가(이) 불러보지만, 이한결은 이미 가고 없다.)",
              "뭐지..?", "우와..", "초콜릿이네..", "뻬로로쉐잖아...!", "맛있겠다.", "츄릅..~",
              "헤이~", "꼬맹아", "꼬맹이 아니라니까 그러네!!", "근데~", "저기서 누가 싸운다?!",
              "뭐?!", "당장 가자!!", "("+pName+"가(이) 뛰어가자 남주혁이 뒤따라 간다.)",
              "(운동장 구석에서 양아치들이 서민규를 괴롭히고 있다.)", "하...", "숨차..", "또 너희야..?",
              "술, 담배..", "이제는 학폭까지...!", "하아아...", "힘들다..", "같이 좀 가자..",
              "흑흑", "돈 없다니까요...!!", "어~엉?", "그래놓고 너 오천원 나왔잖아!", "좋은 말로 할때",
              "돈 내놔.", "지호양~", "살살해.", "애가 무서워 하잖아~~", "애기~", "좋은 말로 할때 주자~?",
              "없다니까요!!!!", "흑흑흑흑흐흑", "하..", "너네 그렇게 괴롭히면 좋니!!!!!!!!!?",
              "어머~", "알빠니?"];

let chiak_moniter = "image_liquid/nothing.PNG";
let mainMan_face = ["image_liquid/mainMan_default.PNG", "image_liquid/mainMan_look.PNG",
                    "image_liquid/mainMan_shy.PNG", "image_liquid/ma inMan_surprise.PNG",
                    "image_liquid/mainMan_happy.PNG", "image_liquid/mainMan_look.PNG", "image_liquid/mainMan_ice.PNG",
                  "image_liquid/mainMan_notFace.PNG"];
let subMan1_face = ["image_liquid/subMan1_default.png", "image_liquid/subMan1_happy.png"];
let subMan2_face = ["image_liquid/subMan2_hurt.png"];
let v2_face =["image_liquid/v2_default.png", "image_liquid/v2_smoking.png"];
let v3_face = ["image_liquid/v3_smoking.png"];

let places=["screen_image/black.jpg", "screen_image/11_secretForest2.jpg"];

let link = ["Choose6.html"];

function toggleImg(){
  const subs = document.getElementById('talks');

  if (chiak_log[count]==undefined) subs.innerText="Loading...";
  else subs.innerText= chiak_log[count];

  if(count==1) name(0);
  if(count==3) name(6);
  if(count==4) name(2);
  if(count==5) sub1(0);
  if(count==6) {
    blur(1);
    sub1(1);
  }
  if(count==7){
    name(0);
  }
  if(count==8) chiakFace();
  if(count==9) name(6);
  if(count==10) name(0);
  if(count==15) blur(0);
  if(count==16) name(1);
  if(count==17) mainMan(4);
  if(count==18) name(0);
  if(count==19) {
    name(1);
    mainMan(0);
  }
  if(count==20) mainMan(5);
  if(count==21) {
    name(0);
    mainMan(0);
  }
  if(count==22) mainMan(6);
  if(count==23) name(6);
  if(count==24) {
      place(1);
      chiakFace();
  }
  if(count==25) name(0);
  if(count==30) {
    mainMan(2);
    name(1);
  }
  if(count==32) mainMan(6);
  if(count==33) {
    sub2(0);
    name(3);
  }
  if(count==35) {
    name(4);
    v3(0);
  }
  if(count==39){
    name(5);
    v2(0);
  }
  if(count==44){
    name(3);
    sub2(0);
  }
  if(count==46){
    chiakFace();
    name(0);
  }
  if(count==48){
    name(5);
    v2(0);
  }
  if(count==50) pass(0);

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
function v2(face){
  document.getElementById("people").src=v2_face[face];
}
function v3(face){
  document.getElementById("people").src=v3_face[face];
}
function sub1(face){
  document.getElementById("people").src=subMan1_face[face];
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
