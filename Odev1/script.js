function isimGir() {
  let isim = prompt("Adınızı giriniz");
  document.getElementById("myName").innerHTML = isim;
}

function tarihBul() {
  let tarih = new Date();
  let h = tarih.getHours();
  let m = tarih.getMinutes();
  let s = tarih.getSeconds();
  let hangigun = tarih.getDay();
  let gun;

  switch (hangigun) {
    case 1:
      gun = "Pazartesi";
      break;
    case 2:
      gun = "Salı";
      break;
    case 3:
      gun = "Çarşamba";
      break;
    case 4:
      gun = "Perşembe";
      break;
    case 5:
      gun = "Cuma";
      break;
    case 6:
      gun = "Cumartesi";
      break;
    case 7:
      gun = "Pazar";
      break;
    default:
      gun = "Günle ilgili bir sorun yaşıyoruz";
  }

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  let zaman = h + ":" + m + ":" + s + " " + gun;
  document.getElementById("myClock").innerHTML = zaman;
  setTimeout(tarihBul, 1000);
}

isimGir();
tarihBul();
