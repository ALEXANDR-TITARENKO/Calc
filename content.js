const content = document.querySelector(".navigatorContent");
const nav1 = document.querySelector(".calkulator1");
const nav2 = document.querySelector(".calkulator2");
const nav3 = document.querySelector(".calkulator3");
const nav4 = document.querySelector(".calkulator4");

const btn1 = document.querySelector("#n1");
const btn2 = document.querySelector("#n2");
const btn3 = document.querySelector("#n3");
const btn4 = document.querySelector("#n4");

function s(a, b, c, d) {
  btn1.textContent = "";
  btn1.insertAdjacentHTML("afterbegin", `${a}`);
  btn2.textContent = "";
  btn2.insertAdjacentHTML("afterbegin", `${b}`);
  btn3.textContent = "";
  btn3.insertAdjacentHTML("afterbegin", `${c}`);
  btn4.textContent = "";
  btn4.insertAdjacentHTML("afterbegin", `${d}`);
}
const cont1 = () => {
  s(1, 2, 3, 4);
  nav1.style.display = "block";
  nav2.style.display = "none";
  nav3.style.display = "none";
  nav4.style.display = "none";
};
const cont2 = () => {
  s("&#10004;", 2, 3, 4);

  nav1.style.display = "none";
  nav2.style.display = "block";
  nav3.style.display = "none";
  nav4.style.display = "none";
};
const cont3 = () => {
  s("&#10004;", "&#10004;", 3, 4);
  nav1.style.display = "none";
  nav2.style.display = "none";
  nav3.style.display = "block";
  nav4.style.display = "none";
};
const cont4 = () => {
  s("&#10004;", "&#10004;", "&#10004;", 4);

  nav1.style.display = "none";
  nav2.style.display = "none";
  nav3.style.display = "none";
  nav4.style.display = "block";
};

const oknoItog = document.querySelector(".oknoItog");
const kratItog = document.querySelector(".kratItog");
const detalItog = document.querySelector(".detalItog");
const brick1 = document.getElementById("1itog");
const brick2 = document.getElementById("2itog");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");

const itog1 = () => {
  arrow1.textContent = "";
  arrow1.insertAdjacentHTML("afterbegin", `&#9660;`);
  arrow2.textContent = "";
  arrow2.insertAdjacentHTML("afterbegin", `&#9650;`);
  kratItog.style.display = "block";
  detalItog.style.display = "none";
  brick1.style.color = "black";
  brick2.style.color = "grey";
};
const itog2 = () => {
  arrow2.textContent = "";
  arrow2.insertAdjacentHTML("afterbegin", `&#9660;`);
  arrow1.textContent = "";
  arrow1.insertAdjacentHTML("afterbegin", `&#9650;`);
  detalItog.style.display = "block";
  kratItog.style.display = "none";
  brick1.style.color = "grey";
  brick2.style.color = "black";
};
