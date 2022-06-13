import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;
let n: number = 0;

while (n == 0) {
  n = Number(prompt("Ingrese un numero:"));
}
if (n % 2 == 0) {
  console.log("El numero " + n + " es par");
} else {
  console.log("El numero " + n + " es impar");
}
