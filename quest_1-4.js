let count = 0;

pName = window.localStorage.getItem("name");
const nameBox = document.getElementById("nameName");
nameBox.innerText = pName;


const text = document.getElementById('quest~');
text.innerText= "4. 남이 피우는 담배 연기를 주위에서 흡입하게 되는 일을 간접흡연이라고 한다.";




function result(r){
  if(r=='t'){
    location.href="story1-end.html";
  }
  if(r=='f'){
    location.href = "death.html";
    window.localStorage.setItem("death", 1);

  }
}
