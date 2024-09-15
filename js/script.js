let inputOk = document.getElementById("Ok");
inputOk.addEventListener("click", function () {
  let n = document.getElementById("Name").value;
  let g = document.getElementById("Ghad").value;
  let v = document.getElementById("Vazn").value;
  let bmi = (v / (g * g));
  if (bmi < 18) {
    let bmi2 = document.getElementById("item1");
    bmi2.innerHTML = `<h1>${bmi} br
${n}</h1>`;
    bmi2.style.backgroundColor = "blue";
  }
  if (bmi > 18 && bmi < 25) {
    let bmi2 = document.getElementById("item1");
    bmi2.innerHTML = `<h1>${bmi} br
${n}</h1>`;
    bmi2.style.backgroundColor = "green";
  }
  if (bmi > 25 && bmi < 30) {
    let bmi2 = document.getElementById("item1");
    bmi2.innerHTML = `<h1>${bmi} br
${n}</h1>`;
    bmi2.style.backgroundColor = "yellow";
  }
  if (bmi > 30 && bmi < 35) {
    let bmi2 = document.getElementById("item1");
    bmi2.innerHTML = `<h1>${bmi} br
${n}</h1>`;
    bmi2.style.backgroundColor = "orange";
  }
  if (bmi > 35) {
    let bmi2 = document.getElementById("item1");
    bmi2.innerHTML = `<h1>${bmi} br
${n}</h1>`;
    bmi2.style.backgroundColor = "red";
  }
});
