let count = 0;

pName = window.localStorage.getItem("name");
const nameBox = document.getElementById("nameName");
nameBox.innerText = pName;


const text = document.getElementById('quest~');
text.innerText="3.학교폭력은 학생vs학생만 해당한다.";


const list2 =  [ "2. 술은 청소년의 뇌의 발달과 인격형성에 영향을 주어 청소년을 충동적이고 공격적으로 바꾼다.",
          "3. 세계 금연의 날은 5월 31일이다.",
          "4. 남이 피우는 담배 연기를 주위에서 흡입하게 되는 일을 간접흡연이라고 한다."];




function result(r){
  if(r=='t'){
    location.href="death.html";
  }
  if(r=='f'){
    location.href = "YesOrNo_3-4.html";
    window.localStorage.setItem("death", 8);

  }
}
