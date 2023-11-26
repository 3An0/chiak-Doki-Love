let count = 0;

pName = window.localStorage.getItem("name");
const nameBox = document.getElementById("nameName");
nameBox.innerText = pName;


const text = document.getElementById('quest~');
text.innerText="2. 전자담배는 전혀 해롭지 않다.";


const list2 =  [ "2. 전자담배는 전혀 해롭지 않다.",
          "3. 세계 금연의 날은 5월 31일이다.",
          "4. 남이 피우는 담배 연기를 주위에서 흡입하게 되는 일을 간접흡연이라고 한다."];




function result(r){
  if(r=='t'){
    location.href="death.html";
    window.localStorage.setItem("death", 1);

  }
  if(r=='f'){
    location.href = "YesOrNo_1-3.html";

  }
}
