let count = 0;
pName = window.localStorage.getItem("name");


const nameBox = document.getElementById("nameName");
nameBox.innerText = pName;

function a(result){
  if(result=="t"){
    location.href = "YesOrNo_2-1.html";
  }
  if(result=="f"){
    location.href = "death.html";
    window.localStorage.setItem("death", 2);
  }
}
