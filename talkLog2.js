let count = 0;
pName = window.localStorage.getItem("name");
console.log(pName);

blur(0);

let names = [pName, "장서은", "안정아", "김지호", " "];

// 플레이어(치악이)
let chiak_log = ["(등굣길)", "좋아.", "학생회장으로써의 첫 등교이니 일찍 왔지.",
              "무려 7시에 등교했다구~", "응...?",  "근데 이게 무슨 냄새지?",
            "(장서은이 지나간다.)", "어...?", "쟤한테서 나는 것 같은데...?", "근데 어디가는거지?", "따라가야겠다.",
            "(양아치 친구들이 모여 담배를 피고 있다.)", "ㅎㅇㅎㅇ", "뭐야...",
          "나 빼고 벌써 담타임...?", "야~", "이 x야 왜케 늦게 옴??", "ㅋㅋㅋㅋㅋㅋ", "한대 하실?",
          "ㅇㅋ. ㄱ~", "으...", "나의 신성한 학교에서 담배를 피다니...",
        "선생님께 말씀드려야겠다."];


let chiak_moniter = "image_liquid/nothing.png";
let v1_face = ["image_liquid/v1_angry.png", "image_liquid/v1_coy.png", "image_liquid/v1_default.png", "image_liquid/v1_happy.png", "image_liquid/v1_notFace.png", "image_liquid/v1_sad.png", "image_liquid/v1_smoking.png", "image_liquid/v1_surprise.png"];
let v2_face = ["image_liquid/v2_smoking.png"];
let v3_face = ["image_liquid/v3_smoking.png"];

let places=["screen_image/4_storage1.jpg", "screen_image/4_storage3.jpg"];

let link = ["pass1.html", "Choose1.html"];

function toggleImg(){
  const subs = document.getElementById('talks');

  if (chiak_log[count]==undefined) subs.innerText="Loading...";
  else subs.innerText= chiak_log[count];

  if(count==1){
    name(0);
  }

  if(count==6){
    v1(2);
    name(4);
  }

  if(count == 7){
    chiakFace();
    name(0);
  }

  if(count == 11){
    place(0);
    name(4);
  }

  if(count == 12){
    name(1);
    v1(3);
  }
  if(count == 13) v1(1);
  if(count == 14) v1(0);
  if(count==15){
    name(2);
    v2(0);
  }
  if(count==17){
    name(3);
    v3(0);
  }
  if(count==19){
    name(1);
    v1(6);
  }
  if(count==20){
    name(0);
    chiakFace();
    blur(1);
  }

  if(count == 23){
    pass(1);
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
function v1(face){
  document.getElementById("people").src=v1_face[face];
}
function v2(face){
  document.getElementById("people").src=v2_face[face];
}
function v3(face){
  document.getElementById("people").src=v3_face[face];
}
function place(num){
  document.getElementById("backpicter").src=places[num];

}

function pass(num){
  location.href = link[num];
}
