let registerButton = document.getElementById("submit");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let loginButton = document.getElementById("log_submit");
let logemailInput = document.getElementById("log_email");
let logpasswordInput = document.getElementById("log_password");
let checkbox = document.getElementById("log_checkbox");

let data_reg = [];
let data_log = [];

registerButton.addEventListener("mousedown", function() {
  let reg_name = nameInput.value;
  let reg_email = emailInput.value;
  let reg_password = passwordInput.value;

  // Создать объект или массив с данными
  let userData_reg = {
    name: reg_name,
    email: reg_email,
    password: reg_password
  };

  // Добавить объект или массив в массив данных
  data_reg.push(userData_reg);

  // Очистить поля ввода
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";

  console.log(data_reg); // Вывести данные в консоль (для проверки)
});

loginButton.addEventListener("mousedown", function() {
  let log_email = logemailInput.value;
  let log_password = logpasswordInput.value;
  let log_checkbox = checkbox.checked;

  // Создать объект или массив с данными
  let userData_log = {
    email: log_email,
    password: log_password,
    checkbox: log_checkbox
  };

  data_log.push(userData_log);

  logemailInput.value = "";
  logpasswordInput.value = "";
  checkbox.checked = false;

  console.log(data_log);
});

let click = document.getElementById("click");
let click2 = document.getElementById("click2");
  
click.addEventListener("mousedown", function () {
    document.getElementById("block_regist").style.display = "none";
    document.getElementById("block_login").style.display = "flex";
});

click2.addEventListener("mousedown", function () {
    document.getElementById("block_login").style.display = "none";
    document.getElementById("block_regist").style.display = "flex";
});