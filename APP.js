function progDelete() {
  const re = document.querySelectorAll(".rezultat");
  debugger;
  re.textContent = "";
}
function prog() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;
  let d = document.getElementById("d").value;
  let i = document.getElementById("i").value;
  let f = document.getElementById("f").value;
  let g = document.getElementById("g").value;
  let frontA = document.getElementById("frontA").value;
  let frontB = document.getElementById("frontB").value;
  let frontC = document.getElementById("frontC").value;
  let frontD = document.getElementById("frontD").value;
  let frontSizeB = document.getElementById("frontSizeB").value;
  let frontSizeC = document.getElementById("frontSizeC").value;
  let chek1 = document.getElementById("chek1").checked;
  let chek2 = document.getElementById("chek2").checked;
  let chek3 = document.getElementById("chek3").checked;

  let ploshad = calcPloshad(a, b, c, d, i, f, g, chek1, chek2, chek3);
  let block = calcBloc(a, b, c, d, i, f, g, chek1, chek2);
  let front = calcFront(frontA, frontB, frontC, frontD, frontSizeB, frontSizeC);
  let getBlock = getSelectValueBlock();
  let markaBlock = getSelectMarcaBlock();
  let dataProem = dataSproem();
  let dataTrapS = dataTrap();
  let dataCircleS = dataCircle();

  let blockS = document.querySelector("#numberBlock");
  let parametrBlock = blockS.options[blockS.selectedIndex].dataset.block;
  let massBlock = blockS.options[blockS.selectedIndex].dataset.massa;
  let poddonBlock = blockS.options[blockS.selectedIndex].dataset.poddon;

  document.querySelector(".rezultat").insertAdjacentHTML(
    "afterbegin",
    `
    <td id="td1">Общая площадь всех стен </td>
    <td id="td2">${ploshad - dataProem - dataTrapS - dataCircleS} м</td>
    <td id="td3">Блок№3</td>
    <td id="td4">Блок№3</td>`
  );

  document.querySelector(".rezultat2").insertAdjacentHTML(
    "afterbegin",
    `
    <td id="td1">Общее колличество блоков</td>
    <td id="td2">${block} шт</td>
    <td id="td3">Блок№3</td>
    <td id="td4">Блок№3</td>`
  );

  document.querySelector(".rezultat3").insertAdjacentHTML(
    "afterbegin",
    `
    <td id="td1">Площадь фронтов</td>
    <td id="td2">${front} шт</td>
    <td id="td3">Блок№3</td>
    <td id="td4">Блок№3</td>`
  );
  document.querySelector(".rezultat4").insertAdjacentHTML(
    "afterbegin",
    `
    <td id="td1">Название и размер блока</td>
    <td id="td2">${getBlock} шт</td>
    <td id="td3">Блок№3</td>
    <td id="td4">Блок№3</td>`
  );
  document.querySelector(".rezultat5").insertAdjacentHTML(
    "afterbegin",
    `
    <td id="td1">Марка блока</td>
    <td id="td2">${markaBlock} шт</td>
    <td id="td3">Блок№3</td>
    <td id="td4">Блок№3</td>`
  );
  document.querySelector(".rezultat6").insertAdjacentHTML(
    "afterbegin",
    `
    <td id="td1">Площадь проемов</td>
    <td id="td2">${dataProem} шт</td>
    <td id="td3">Блок№3</td>
    <td id="td4">Блок№3</td>`
  );
  document.querySelector(".rezultat7").insertAdjacentHTML(
    "afterbegin",
    `
    <td id="td1">Площадь трапецевидных окон</td>
    <td id="td2">${dataTrapS} шт</td>
    <td id="td3">Блок№3</td>
    <td id="td4">Блок№3</td>`
  );
  document.querySelector(".rezultat8").insertAdjacentHTML(
    "afterbegin",
    `
    <td id="td1">Площадь круглых окон</td>
    <td id="td2">${dataCircleS} шт</td>
    <td id="td3">Блок№3</td>
    <td id="td4">Блок№3</td>`
  );
  document.querySelector(".rezultat9").insertAdjacentHTML(
    "afterbegin",
    `
    <td id="td1">Масса всех блоков</td>
    <td id="td2">${(block * massBlock) / 1000}т</td>
    <td id="td3">Блок№3</td>
    <td id="td4">Блок№3</td>`
  );
  document.querySelector(".rezultat10").insertAdjacentHTML(
    "afterbegin",
    `
    <td id="td1">Объем блоков</td>
    <td id="td2">${block * parametrBlock}т</td>
    <td id="td3">Блок№3</td>
    <td id="td4">Блок№3</td>`
  );
  document.querySelector(".rezultat11").insertAdjacentHTML(
    "afterbegin",
    `
    <td id="td1">Колличество штук на поддоне </td>
    <td id="td2">${poddonBlock}т</td>
    <td id="td3">Блок№3</td>
    <td id="td4">Блок№3</td>`
  );
  document.querySelector(".rezultat12").insertAdjacentHTML(
    "afterbegin",
    `
    <td id="td1">Колличество поддонов</td>
    <td id="td2">${block / poddonBlock}т</td>
    <td id="td3">Блок№3</td>
    <td id="td4">Блок№3</td>`
  );
}

//  Площадь всех стен
function calcPloshad(a, b, c, d, i, f, g, chek1, chek2, chek3) {
  let s1 = chek1 ? Math.ceil(+c / 0.3) * 0.3 * b : b * c;
  let s2 = chek2 ? Math.ceil(+i / 0.3) * 0.3 * d : d * i;
  let s3 = chek3 ? Math.ceil(+g / 0.3) * 0.3 * f : f * g;

  let s = (s2, s3 > 0) ? s1 + s2 + s3 : s1 + s2; //  Общая площадь
  // let procent = (s / 100) * a; //вычисление процентов
  let ploshadDoma = s;

  return ploshadDoma.toFixed(0);
}
// Колличество всех блоко
function calcBloc(a, b, c, d, i, f, l, chek1, chek2) {
  let p = b + d + f; // вся длина
  let v = c + i + l; //вся высота
  let pV = (p / 0.58) * (v / 0.3); //формула расчета блоков
  let procent2 = (pV / 100) * a;
  let bloki = pV + procent2;

  return bloki.toFixed(0);
}
// Калькулятор фронтов
function calcFront(frontA, frontB, frontC, frontD, frontSizeB, frontSizeC) {
  let S1 =
    frontSizeB > 0 ? 0.5 * frontA * frontB * frontSizeB : 0.5 * frontA * frontB;
  let S2 =
    frontSizeC > 0 ? 0.5 * frontC * frontD * frontSizeC : 0.5 * frontC * frontD;
  let S = S1 + S2;
  return S;
}
// Какой блок выбран

function getSelectValueBlock() {
  let selectBloc = document.querySelector(".S-block");
  let value = selectBloc.value;

  return value;
}
//  Какая марка блока выбрана
function getSelectMarcaBlock() {
  let selectBloc = document.querySelector(".D-block");
  let value = selectBloc.value;
  return value;
}
//  Добавляем в калькуляторе колличество каких проемов будет и записываем в data Площадь каждого проема
function getProem() {
  let proemH = document.getElementById("proemH").value;
  let proemL = document.getElementById("proemL").value;
  let proemSize = document.getElementById("proemSize").value;
  let proemS = proemSize ? proemH * proemL * proemSize : proemH * proemL;

  const taskHTML = `<li class='liProem' data-attr="${proemS}"> Проем ${proemH} x ${proemL} - ${proemSize} шт.
  <button class="btn-delete" id="btn-clear">&#128465;</button></li>`;
  const proemHTML = `<td id="td1">Проем (ширина,высота,колличество)</td>
  <td id="td2"> ${proemH} x ${proemL} - ${proemSize} шт.</td>
  <td id="td3">Блок№3</td>
  <td id="td4">Блок№3</td>`;
  const taskList = document.querySelector("#taskList");
  const proemHouse = document.querySelector(".proemHouse");
  const noDan = document.getElementById("noDan");
  taskList.insertAdjacentHTML("beforeend", taskHTML);
  proemHouse.insertAdjacentHTML("afterbegin", proemHTML);
  noDan.textContent = "";
}
// Удаление из списка проемов
document.querySelector("#taskList").onclick = function (e) {
  const btn = e.target.closest(".btn-delete");
  const proemHouse = document.querySelector(".proemHouse");
  if (!btn) {
    return;
  }
  btn.parentElement.remove();
};
//Достаем общее колличество всех data проемов их площадя
function dataSproem() {
  let dataS = document.querySelectorAll("#taskList > li");
  let vse = [0];
  for (i = 0; i < dataS.length; i++) {
    let col = dataS[i].dataset.attr;
    vse.push(col);
  }
  const vseSum = vse.reduce((a, b) => {
    return +a + +b;
  });
  return vseSum;
}

//Функция добавления в список трапеции
function getTrap() {
  let trapH = document.getElementById("trapH").value;
  let trapH2 = document.getElementById("trapH2").value;
  let trapL = document.getElementById("trapL").value;
  let trapSize = document.getElementById("trapSize").value;
  let trapS = trapSize
    ? (((+trapH + +trapH2) * +trapL) / 2) * trapSize
    : ((+trapH + +trapH2) * +trapL) / 2;
  const taskHTML = `<li class='liTrap' data-attr="${trapS}">  Окно ${trapH} x ${trapH2} x ${trapL} - ${trapSize} шт.
  <button class="btn-delete" id="btn-clear">&#128465;</button></li>`;
  const taskListTrap = document.querySelector("#taskListTrap");
  taskListTrap.insertAdjacentHTML("beforeend", taskHTML);

  const trapecOknoHouseHTML = ` 
  <td id="td1"> Окно трапеция</td>
  <td id="td2"> ${trapH} x ${trapH2} x ${trapL} - ${trapSize} шт.</td>`;
  const trapecOknoHouse = document.querySelector(".trapecOknoHouse");
  const noDan2 = document.getElementById("noDan2");
  trapecOknoHouse.insertAdjacentHTML("afterbegin", trapecOknoHouseHTML);
  noDan2.textContent = "";
}
document.querySelector("#taskListTrap").onclick = function (e) {
  const btn = e.target.closest(".btn-delete");
  if (!btn) {
    return;
  }
  btn.parentElement.remove();
};
//Функция расчета трапеции

function dataTrap() {
  let dataS = document.querySelectorAll("#taskListTrap > li");
  let vse = [0];
  for (i = 0; i < dataS.length; i++) {
    let col = dataS[i].dataset.attr;
    vse.push(col);
  }
  const vseSum = vse.reduce((a, b) => {
    return +a + +b;
  });
  return vseSum;
}

//Функция расчета площади круга

function getCircle() {
  let circleH = document.getElementById("circleH").value;
  let circleL = document.getElementById("circleL").value;
  let circleSize = document.getElementById("circleSize").value;
  let circleS = circleSize
    ? ((Math.PI * circleH * circleL) / 4) * circleSize
    : (Math.PI * circleH * circleL) / 4;

  const taskHTML = `<li class='liCircle' data-attr="${circleS.toFixed(
    1
  )}">  Окно ${circleH} x ${circleL} - ${circleSize} шт.
  <button class="btn-delete" id="btn-clear">&#128465;</button></li>`;
  const taskListCircle = document.querySelector("#taskListCircle");
  taskListCircle.insertAdjacentHTML("beforeend", taskHTML);
}
document.querySelector("#taskListCircle").onclick = function (e) {
  const btn = e.target.closest(".btn-delete");
  if (!btn) {
    return;
  }
  btn.parentElement.remove();
};
//Функция расчета круга

function dataCircle() {
  let dataS = document.querySelectorAll("#taskListCircle > li");
  let vse = [0];
  for (i = 0; i < dataS.length; i++) {
    let col = dataS[i].dataset.attr;
    vse.push(col);
  }
  const vseSum = vse.reduce((a, b) => {
    return +a + +b;
  });
  return vseSum;
}

// Кнопки навигатора активный стиль
let btnContainer = document.querySelector(".navigator");
let btns = btnContainer.getElementsByClassName("nav");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    i;
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Р = ((L + H)/L*H)*b*1.46

// где: Р — расход сухой смеси на 1 мм толщины слоя (кг/м³), L — длина блока (м), H — высота (м), b - ширина (м).
