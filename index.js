// var heading = document.querySelector("#sName");
// sName.onclick = function () {
//   sName.style.color = "red";
// };

// var reply = confirm("확인하셨나요?");

const studentlist = [
  "순영",
  "지수",
  "지민",
  "준호",
  "해린",
  "윤아",
  "채연",
  "슬기",
  "나연",
  "유리",
  "가을",
  "보미",
  "아린",
  "서현",
  "다현",
  "유진",
  "정한",
  "승철",
  "민규",
  "도영",
  "규현",
  "희철",
  "민호",
  "은우",
  "정국",
];

var start = document.querySelector("#start");
function startrandom() {
  wNum = studentlist.length;
  randomN = Math.floor(Math.random() * wNum + 1);
  pickStudent = studentlist[randomN - 1];
  studentlist.pop(pickStudent);
  // document.querySelector('#result').value = "<h1>발표자는 " + pickStudent + "입니다.</h1>";
  if (pickStudent === undefined) {
    document.getElementById("result").innerText = "모두 발표를 했습니다.";
    document.getElementById("lastNum").innerText =
      "남은사람은 : " + wNum + "명";
  } else {
    document.getElementById("result").innerText =
      "발표자는 " + pickStudent + "입니다.";
    document.getElementById("lastNum").innerText =
      "남은사람은 : " + wNum + "명";
  }
}
