var elem = document.querySelector("#container");
var btn = document.querySelector(".register");
var alerts = document.querySelector(".alert");

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

btn.onclick = function () {
  openFullscreen();
};

//

const btnLogin = document.querySelector(".login");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

btnLogin.onclick = function () {
  let msg = "";
  if (email.value == "" || password.value == "") {
    msg = "Vui lòng điền đầy đủ thông tin đăng nhập.";
  } else {
    if (email.value.length < 6 || password.value.length < 6) {
      msg = "Email hoặc mật khẩu không chính xác.";
    } else {
      console.log("Success!");
    }
  }

  if (msg != "") {
    alerts.innerHTML = msg;
    alerts.style.display = "block";
  }
};
