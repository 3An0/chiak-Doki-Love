let count = 0;
pName = window.localStorage.getItem("name");
console.log(pName);

blur(0);

let names = [pName, "남주혁", " "];

// 플레이어(치악이)
let chiak_log = ["(야자 끝난 후 하굣길)", "후..", "드디어 끝났네.", "힘들었다...!",
              "(시끌시끌 주변 공원에서 시끄러운 소리가 들려온다.)", "근데..", "이건 또 무슨 소리람...?",
            "공원에서 나는 것 같은데...?", "야~", "같이 가자", "음...?", "근데 이게 무슨 소리람??",
              "저기서 나는 것 같은데??", "(남주혁이 소리나는 쪽으로 신나게 발걸음을 옮긴다.)",
            "야...!", "같이 가~!!", "빨리 와라.", "꼬맹아~", "너어~", "나 꼬맹이 아니거든!",
            "(그때 남주혁이 갑자기 멈춰선다.)", "아!", "부딪혔잖아.", "뭐야...!!", "야...", "쟤네 술 마시는데...?",
            "...", "하..", "쟤네 아까 술마시던 애들이네??", "(하..)", "(아침에 그렇게 혼났는데 정신을 못 차리다니...)"];


let chiak_moniter = "image_liquid/nothing.PNG";
let mainMan_face = ["image_liquid/mainMan_default.PNG", "image_liquid/mainMan_look.PNG",
                    "image_liquid/mainMan_shy.PNG", "image_liquid/mainMan_surprise.PNG", "image_liquid/mainMan_happy.PNG"];



let places=["screen_image/11_secretForest6.jpg", "screen_image/16_darkSmoking2.jpg"];

let link = ["Choose2.html"];

function toggleImg(){
  const subs = document.getElementById('talks');

  if (chiak_log[count]==undefined) subs.innerText="Loading...";
  else subs.innerText= chiak_log[count];


  if(count==1){
    name(0);
  }

  if(count==4){
    name(2);
  }
  if(count==5) name(0);

  if(count==8){
    name(1);
    mainMan(4);
  }
  if(count==9) mainMan(0);
  if(count==10) mainMan(1);
  if(count==11) mainMan(0);
  if(count==12) mainMan(1);
  if(count ==13){
    name(2);
    mainMan(4);
    place(0);
    blur(1);
  }
  if(count==14){
    name(0);
    chiakFace();
  }
  if(count==16){
    name(1);
    mainMan(4);
  }
  if(count==18){
    name(0);
    chiakFace();
  }
  if(count==20){
    blur(0);
    name(2);
    mainMan(2);
    place(1);
  }
  if(count==21) name(0);
  if(count==24){
    name(1);
    mainMan(3);
  }
  if(count==26) name(0);
  if(count==27){
    chiakFace();
  }

  if(count==31) pass(0);



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


function place(num){
  document.getElementById("backpicter").src=places[num];

}

function pass(num){
  location.href = link[num];
}
