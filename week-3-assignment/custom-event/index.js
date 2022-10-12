// counter elementini seçtim
const counterEl = document.querySelector("#counter");

// parametresi "type" olan fonksiyon oluşturdum.
// gelen tipe göre artırma ya da azaltma işlemi yapmak için
// CustomEvent ile data geçmek için detail key kullanılır. Detail içerisinde count property'i gönderdim.
function counterChange(type) {
  switch (type) {
    case "increment":
      counterEl.dispatchEvent(
        new CustomEvent("counter-change", {
          detail: {
            count: Number(counterEl.innerHTML) + 1,
          },
        })
      );
      break;
    case "decrement":
      counterEl.dispatchEvent(
        new CustomEvent("counter-change", {
          detail: {
            count: Number(counterEl.innerHTML) - 1,
          },
        })
      );
    default:
      break;
  }
}

// Butonlara tıklanınca CustomEvent ile counter'a dispatch ettim.
// her dispatch edildiğinde counterEl'e bu eventi dinleme görevi vermiş olduk.
// gelen datayı e.detail ile aldım.
counterEl.addEventListener("counter-change", (e) => {
  e.target.innerHTML = e.detail.count;
});
