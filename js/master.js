let $display = document.getElementById("result");
let $btnReset = document.getElementById("btn-reset");
let $btnBackspace = document.getElementById("btn-backspace");
let $btnPercent = document.getElementById("btn-percent");
let $btnPn = document.getElementById("btn-pn");
let $equal = document.getElementById("equal");
let $resetLast = document.getElementById("btn-reset-last-action");
let $temp = false;

function para(self) {
  if ($display.innerHTML == "0.0") {
    $display.innerHTML = self;
  } else {
    $display.innerHTML += self;
  }
}
// ******

$btnReset.addEventListener("click", function () {
  $display.innerText = "0.0";
  $temp = false;
});
// ******
$btnBackspace.addEventListener("click", function () {
  if ($display.innerText.length <= 1) {
    $display.innerText = "";
  } else {
    if ($temp == false) {
      $length = $display.innerText.length;
      $display.innerText = $display.innerText.substr(0, $length - 1);
    } else {
      $display.innerText = "";
    }
  }
});
// ******
$resetLast.addEventListener("click", function () {
  $display.innerText = "0.0";
});
// ******
$btnPn.addEventListener("click", function () {
  $display.innerText = $display.innerText * -1;
});
// ******
$btnPercent.addEventListener("click", function () {
  $display.innerText = Number($display.innerText) / 100;
});
// *****************************************************************

$equal.addEventListener("click", function () {
  try {
    $display.innerHTML = eval($display.innerHTML);
  } catch (error) {
    alert("please enter the valid number");
  }
});
//  **************************************************
function $key(event) {
  code = event.which;

  if (code == 96 || code== 48) {
    if ($display.innerHTML == "0.0") {
      $display.innerHTML = "0";
    } else {
      $display.innerHTML += "0";
    }
    document.getElementById("zero").classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      document.getElementById("zero").classList.remove("shadow");
    }
  }

  if (code == 110 || code== 190) {
    if ($display.innerHTML == "0.0") {
      $display.innerHTML = ".";
    } else {
      $display.innerHTML += ".";
    }
    document.getElementById("point").classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      document.getElementById("point").classList.remove("shadow");
    }
  }
  if (code == 97 || code==49) {
    if ($display.innerHTML == "0.0") {
      $display.innerHTML = "1";
    } else {
      $display.innerHTML += "1";
    }
    document.getElementById("one").classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      document.getElementById("one").classList.remove("shadow");
    }
  }
  if (code == 98 || code== 50) {
    if ($display.innerHTML == "0.0") {
      $display.innerHTML = "2";
    } else {
      $display.innerHTML += "2";
    }
    document.getElementById("two").classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      document.getElementById("two").classList.remove("shadow");
    }
  }
  if (code == 99 || code== 51) {
    if ($display.innerHTML == "0.0") {
      $display.innerHTML = "3";
    } else {
      $display.innerHTML += "3";
    }
    document.getElementById("three").classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      document.getElementById("three").classList.remove("shadow");
    }
  }
  if (code == 100 || code== 52) {
    if ($display.innerHTML == "0.0") {
      $display.innerHTML = "4";
    } else {
      $display.innerHTML += "4";
    }
    document.getElementById("four").classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      document.getElementById("four").classList.remove("shadow");
    }
  }
  if (code == 101 || code== 53) {
    if ($display.innerHTML == "0.0") {
      $display.innerHTML = "5";
    } else {
      $display.innerHTML += "5";
    }
    document.getElementById("five").classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      document.getElementById("five").classList.remove("shadow");
    }
  }
  if (code == 102 || code== 54) {
    if ($display.innerHTML == "0.0") {
      $display.innerHTML = "6";
    } else {
      $display.innerHTML += "6";
    }
    document.getElementById("six").classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      document.getElementById("six").classList.remove("shadow");
    }
  }
  if (code == 103 || code== 55) {
    if ($display.innerHTML == "0.0") {
      $display.innerHTML = "7";
    } else {
      $display.innerHTML += "7";
    }
    document.getElementById("seven").classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      document.getElementById("seven").classList.remove("shadow");
    }
  }
  if (code == 104 || code== 56) {
    if ($display.innerHTML == "0.0") {
      $display.innerHTML = "8";
    } else {
      $display.innerHTML += "8";
    }
    document.getElementById("eight").classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      document.getElementById("eight").classList.remove("shadow");
    }
  }
  if (code == 105 || code== 57) {
    if ($display.innerHTML == "0.0") {
      $display.innerHTML = "9";
    } else {
      $display.innerHTML += "9";
    }
    document.getElementById("nine").classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      document.getElementById("nine").classList.remove("shadow");
    }
  }
  if (code == 107) {
    if ($display.innerHTML == "0.0") {
      $display.innerHTML = "+";
    } else {
      $display.innerHTML += "+";
    }
    document.getElementById("plus").classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      document.getElementById("plus").classList.remove("shadow");
    }
  }
  if (code == 111 || code== 191) {
    if ($display.innerHTML == "0.0") {
      $display.innerHTML = "/";
    } else {
      $display.innerHTML += "/";
    }
    document.getElementById("div").classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      document.getElementById("div").classList.remove("shadow");
    }
  }
  if (code == 106) {
    if ($display.innerHTML == "0.0") {
      $display.innerHTML = "*";
    } else {
      $display.innerHTML += "*";
    }
    document.getElementById("mul").classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      document.getElementById("mul").classList.remove("shadow");
    }
  }
  if (code == 109 || code== 189) {
    if ($display.innerHTML == "0.0") {
      $display.innerHTML = "-";
    } else {
      $display.innerHTML += "-";
    }
    document.getElementById("minus").classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      document.getElementById("minus").classList.remove("shadow");
    }
  }

  if (code == 8) {
    if ($display.innerText.length <= 1) {
      $display.innerText = "";
    } else {
      if ($temp == false) {
        $length = $display.innerText.length;
        $display.innerText = $display.innerText.substr(0, $length - 1);
      } else {
        $display.innerText = "";
      }
    }
    $btnBackspace.classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      $btnBackspace.classList.remove("shadow");
    }
  }
  if (code == 46) {
    $display.innerText = "0.0";
    $temp = false;
    $btnReset.classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      $btnReset.classList.remove("shadow");
    }
  }
  if (code == 187) {
    try {
      $display.innerHTML = eval($display.innerHTML);
    } catch (error) {
      alert("please enter the valid number");
    }
    document.getElementById("eequal").classList.add("shadow");
    setTimeout($clean, 40);
    function $clean() {
      document.getElementById("eequal").classList.remove("shadow");
    }
  }
}
