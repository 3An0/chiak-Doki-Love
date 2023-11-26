let link = ["Choose1.html", "YesOrNo_1-1.html", "Choose2.html",
            "YesOrNo_2-1.html", "Choose3.html", "Choose4.html",
            "Choose5.html", "Choose6.html", "YesOrNo_3-1.html",
            "Choose7.html"];

let number = window.localStorage.getItem("death");
console.log(number);

function reset(){
  location.href = link[number];
}
