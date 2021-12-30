const back = document.querySelector(".back");
const form = document.querySelector(".wrap-form");
const closee = document.querySelector(".close-modal");

/* ========================================================================== */
/*                             XU LY DONG MO FORM                             */
/* ========================================================================== */
back.addEventListener("click", handleclick);
closee.addEventListener("click", deleteclick);

function handleclick() {
  form.classList.add("active");
  formBlock.classList.remove("active");
  formFinish.classList.remove("active");
}

function deleteclick() {
  form.classList.remove("active");
}

/* ========================================================================== */
/*                            XU LU KHI CHON CUSTOM                           */
/* ========================================================================== */
const cus1 = document.querySelector(".op-custom1");
const cus2 = document.querySelector(".op-custom2");

const check1 = document.querySelector("#op2");
const check2 = document.querySelector("#op3");

check1.onclick = () => {
  handlecheck1();
};
check2.onclick = () => {
  handlecheck2();
};

function handlecheck1() {
  if (check1.checked) {
    cus2.classList.remove("active");
    cus1.classList.add("active");
    check2.checked = false;
  }
  if (!check1.checked) {
    cus1.classList.remove("active");
  }
}

function handlecheck2() {
  if (check2.checked) {
    cus1.classList.remove("active");
    cus2.classList.add("active");
    check1.checked = false;
  }
  if (!check2.checked) {
    cus2.classList.remove("active");
  }
}

/* ========================================================================== */
/*                       CHECK DU DK DE THANH CONG KHONG                      */
/* ========================================================================== */
const input1 = document.querySelector("#input1");
const bt1 = document.querySelector("#bt1");
const input2 = document.querySelector("#input2");
const bt2 = document.querySelector("#bt2");
const formBlock = document.querySelector(".back-form");
const formFinish = document.querySelector(".form-finish");
const finish = document.querySelector(".got-it");

bt1.addEventListener("click", hadleValue);
bt2.addEventListener("click", hadleValue2);
finish.addEventListener("click", finishform);

function hadleValue() {
  if (input1.value < 1 || input1.value > 74) {
    return false;
  } else {
    formBlock.classList.add("active");
    formFinish.classList.add("active");
  }
}

function hadleValue2() {
  if (input2.value < 75 || input2.value > 199) {
    return false;
  } else {
    formBlock.classList.add("active");
    formFinish.classList.add("active");
  }
}

function finishform() {
  form.classList.remove("active");
}

/* ========================================================================== */
/*                                   TOOGLE                                   */
/* ========================================================================== */
const hamber = document.querySelector(".hamber");
const toggle = document.querySelector(".tg-icon");
const menu = document.querySelector(".tg-menu");
const sec = document.querySelector(".main-sec");

toggle.onclick = () => {
  menu.classList.toggle("active");
  toggle.classList.toggle("active");
  
};

sec.onclick = () => {
  menu.classList.remove("active");
};
