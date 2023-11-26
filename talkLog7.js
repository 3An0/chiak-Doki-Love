let count = 0;
pName = window.localStorage.getItem("name");
console.log(pName);

blur(0);

let names = [pName, "남주혁", " "];

// 플레이어(치악이)
let chiak_log = ["그래도...", "술먹는 것도 잡고...", "나 자신, 장하다!!", "(양아치 친구들은 징계를 세게 먹었다고 한다~~)", "(I'm on the NEXT LEVEL yeah...)"];


let chiak_moniter = "image_liquid/nothing.PNG";
let mainMan_face = ["image_liquid/mainMan_default.PNG", "image_liquid/mainMan_look.PNG",
                    "image_liquid/mainMan_shy.PNG", "image_liquid/ma inMan_surprise.PNG", "image_liquid/mainMan_happy.PNG"];
let v1_face =["image_liquid/v1_coy.png", "image_liquid/v1_angry.png"];


let places=["screen_image/black.jpg", "screen_image/19_ggagga1.jpg"];

let link = ["pass3.html"];

function toggleImg(){
  const subs = document.getElementById('talks');

  if (chiak_log[count]==undefined) subs.innerText="Loading...";
  else subs.innerText= chiak_log[count];


  if(count==0){
    name(0);
    chiakFace();
  }
  if(count==3){
    name(2);
    place(0);
  }
  if(count==4){
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
function v1(face){
  document.getElementById("people").src=v1_face[face];
}

function place(num){
  document.getElementById("backpicter").src=places[num];

}

function pass(num){
  location.href = link[num];
}
