const ad = prompt("Isminizi giriniz :");

document.getElementById("ad").innerHTML =
  "Merhaba  " + ad.toUpperCase().toString() + "  Hosgeldin";

let saat = document.getElementById("saat");

function zaman() {
  const tarih = new Date();

  let saat = tarih.getHours();
  let dakika = tarih.getMinutes();
  let saniye = tarih.getSeconds();

  let gun = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];
  let gunName = gun[tarih.getDay()];

  let clock = document.querySelector("#saat");
  clock.innerHTML = `${saat}:${dakika}:${saniye} ${gunName}`;
}

setInterval(zaman, 1000);
