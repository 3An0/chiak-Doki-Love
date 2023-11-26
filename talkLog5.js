let count = 0;
pName = window.localStorage.getItem("name");
console.log(pName);

blur(0);

let names = [pName, "남주혁", " ", "선생님", "장서은"];

// 플레이어(치악이)
let chiak_log = ["선생님, 저기에요!", "너....!", "하..", "담배를 안 피우니까 술을 마시니?", "너네는....", "따라왓!!",
                  "하....", "(" + pName + "(을)를 째려본다)", "(주춤한다)", "괜찮아.", "("+ pName + "의 손을 꼭 잡아준다)"];


let chiak_moniter = "image_liquid/nothing.PNG";
let mainMan_face = ["image_liquid/mainMan_default.PNG", "image_liquid/mainMan_look.PNG",
                    "image_liquid/mainMan_shy.PNG", "image_liquid/mainMan_surprise.PNG", "image_liquid/mainMan_happy.PNG"];
let v1_face =["image_liquid/v1_coy.png", "image_liquid/v1_angry.png"];


let places=["screen_image/11_secretForest6.jpg", "screen_image/16_darkSmoking2.jpg"];

let link = ["Choose3.html"];

function toggleImg(){
  const subs = document.getElementById('talks');

  if (chiak_log[count]==undefined) subs.innerText="Loading...";
  else subs.innerText= chiak_log[count];


  if(count==0){
    name(1);
    mainMan(0);
  }

  if(count==1){
    name(3);
    chiakFace();
  }
  if(count==6){
    name(4);
    v1(1);
  }
  if(count==7) v1(0);
  if(count==8) name(0);
  if(count==9){
    name(1);
    mainMan(0);
  }
  if(count==10) mainMan(4);

  if(count==11) pass(0);

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
