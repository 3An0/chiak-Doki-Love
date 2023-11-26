let count = 0;
pName = window.localStorage.getItem("name");
console.log(pName);

blur(0);

let names = [pName, "선생님", " "];

// 플레이어(치악이)
let chiak_log = [pName+"(이)가 선생님을 불러온다", "선생님. 저기 우리학교 학생들이 담배를 피고 있어요!",
                "어디...!", "학교에서 담배를 펴!", "너네 다 이리와!!", "그렇게 양아치들은 선생님께 끌려가 징계 처분을 받았다~~~",
              "좋아~!", "한 건 했고!", "다시는 담배를 안 피겠다는 각서까지 받게하다니..", "최고잖아?!", "그렇게 "+pName + "(은)는 자신의 공약을 실현했다!!",
              "(next page...)"];


let chiak_moniter = "image_liquid/nothing.png";
let v1_face = ["image_liquid/v1_angry.png", "image_liquid/v1_coy.png", "image_liquid/v1_default.png", "image_liquid/v1_happy.png", "image_liquid/v1_notFace.png", "image_liquid/v1_sad.png", "image_liquid/v1_smoking.png", "image_liquid/v1_surprise.png"];
let v2_face = ["image_liquid/v2_fake.png"];
let v3_face = ["image_liquid/v3_fake.png"];

let places=["screen_image/4_storage1.jpg", "screen_image/4_storage3.jpg"];

let link = ["pass1.html", "Choose1.html"];

function toggleImg(){
  const subs = document.getElementById('talks');

  if (chiak_log[count]==undefined) subs.innerText="Loading...";
  else subs.innerText= chiak_log[count];

  if(count==1){
    name(0);
  }

  if(count==2) name(1);
  if(count==5) name(2);
  if(count==6) name(0);
  if(count==10) name(2);
  if(count==12) location.href = "pass2.html";
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
function place(num){
  document.getElementById("backpicter").src=places[num];

}

function pass(num){
  location.href = link[num];
}
