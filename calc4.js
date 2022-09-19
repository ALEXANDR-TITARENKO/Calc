const tabl = () => {
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
  let selectBlocMarca = document.querySelector(".D-block").value;
  let selectBloc = document.querySelector(".S-block").value;
  let proemH = document.getElementById("proemH").value;
  let proemL = document.getElementById("proemL").value;
  let proemSize = document.getElementById("proemSize").value;

  let sizeBlock = document.getElementsByClassName("sizeBlockTabl1");
  let sizeBlockArray = Array.from(sizeBlock);
  sizeBlockArray.forEach(function (link, i, sizeBlockArray) {
    link.insertAdjacentHTML(
      "afterbegin",
      `
        <td id="td1">Размер блока</td>
        <td id="td2">${selectBloc}</td>
        <td id="td3">Блок№3</td>
        <td id="td4">Блок№3</td>`
    );
  });

  let sizeBlock2 = document.getElementsByClassName("sizeBlockTabl2");
  let sizeBlock2Array = Array.from(sizeBlock2);
  sizeBlock2Array.forEach(function (link, i, sizeBlockArray) {
    link.insertAdjacentHTML(
      "afterbegin",
      `
      <td id="td1">Марка блока</td>
      <td id="td2">${selectBlocMarca ? selectBlocMarca : "не заданно"}</td>
      <td id="td3">Блок№3</td>
      <td id="td4">Блок№3</td>`
    );
  });

  let procent = document.getElementsByClassName("sizeBlockTabl3");
  let procentArray = Array.from(procent);
  procentArray.forEach(function (link, i, sizeBlockArray) {
    link.insertAdjacentHTML(
      "afterbegin",
      `
      <td id="td1">Запас на обрезки</td>
      <td id="td2">${a ? a : "не заданно"}</td>
      <td id="td3">Блок№3</td>
      <td id="td4">Блок№3</td>`
    );
  });

  let oneHouse = document.querySelector(".oneHouse");
  oneHouse.insertAdjacentHTML(
    "afterbegin",
    `
    <td id="td1">1 этаж</td>
    <td id="td2">${b ? b : 0} x ${c ? c : 0} м </td>
    <td id="td3">Блок№3</td>
    <td id="td4">Блок№3</td>`
  );

  let twoHouse = document.querySelector(".twoHouse");
  twoHouse.insertAdjacentHTML(
    "afterbegin",
    `
    <td id="td1">2 этаж</td>
    <td id="td2">${d ? d : 0} x ${i ? i : 0} м</td>
    <td id="td3">Блок№3</td>
    <td id="td4">Блок№3</td>`
  );
  let threeHouse = document.querySelector(".threeHouse");
  threeHouse.insertAdjacentHTML(
    "afterbegin",
    `
    <td id="td1">3 этаж</td>
    <td id="td2">${f ? f : 0} x ${g ? g : 0} м</td>
    <td id="td3">Блок№3</td>
    <td id="td4">Блок№3</td>`
  );

  let frontHouse1 = document.querySelector(".frontHouse1");
  frontHouse1.insertAdjacentHTML(
    "afterbegin",
    `
    <td id="td1">1 фронт (ширина,высота,колличество)</td>
  <td id="td2">${frontA ? frontA : 0} x ${frontB ? frontB : 0} - ${
      frontSizeB ? frontSizeB : 0
    } шт</td>
  <td id="">&nbsp; </td>
  <td id=""> &nbsp;</td>`
  );

  let frontHouse2 = document.querySelector(".frontHouse2");
  frontHouse2.insertAdjacentHTML(
    "afterbegin",
    `
    <td id="td1">2 фронт (ширина,высота,колличество)</td>
  <td id="td2">${frontC ? frontC : 0} x ${frontD ? frontD : 0} - ${
      frontSizeC ? frontSizeC : 0
    } шт</td>`
  );
};

const tablRaschet = (block) => {
  let tabl = document.querySelector(".tablConteinerRashet");
  let raschetBlockItog1 = document.querySelector(".raschetBlockItog1");
  let raschetBlockItog2 = document.querySelector(".raschetBlockItog2");

  if (block === "block") {
    tabl.style.display = "block";
    raschetBlockItog1.style.display = "none";
    raschetBlockItog2.style.display = "block";
  } else {
    tabl.style.display = "none";
    raschetBlockItog1.style.display = "block";
    raschetBlockItog2.style.display = "none";
  }
};

const tablRaschetPerem = (block) => {
  let tabl = document.querySelector(".tablConteinerRashetPerem");
  let raschetPeremItog1 = document.querySelector(".raschetPeremItog1");
  let raschetPeremItog2 = document.querySelector(".raschetPeremItog2");

  if (block === "block") {
    tabl.style.display = "block";
    raschetPeremItog1.style.display = "none";
    raschetPeremItog2.style.display = "block";
  } else {
    tabl.style.display = "none";
    raschetPeremItog1.style.display = "block";
    raschetPeremItog2.style.display = "none";
  }
};
