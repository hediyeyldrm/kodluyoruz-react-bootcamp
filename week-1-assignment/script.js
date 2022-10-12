// Session Storage ile get ve set işlemleri

// key = "surname", value = "Yıldırım" değerlerini setItem içine yerleştirip sessionStorage alanına kaydettim.
window.sessionStorage.setItem("surname", "Yıldırım")

// key = "Yıldırım" değerini getItem içine yerleştirip sessionStorage alanından key değerine karşılık gelen veriyi aldım.
const sessionRead = window.sessionStorage.getItem("surname")
console.log(sessionRead)

// Butona tıklanma sayısını sessionStorage'da tutar. Butona tıklandıkça sessionStorage'daki değer senkron olarak değişir. Tarayıcı veya sekmeyi kapatınca sessionStorage'daki değerler silinir.
function counter() {
    if (typeof (Storage) !== "Tanımsız") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = `Bu oturumda Count butonuna  " ${sessionStorage.clickcount} " kez bastınız.`;
    } else {
        document.getElementById("result").innerHTML = "TARAYICINIZ BU NESNEYI DESTEKLEMIYOR";
    }
}

// Cookies

// bu şekilde "userName"i Hediye olan bir cookie oluşturdum, son kullanma tarihi ekledim bu sayede verilerin ne kadar zaman tarayıcıda saklanacağını ayarlamış oldum.
document.cookie = "userName=Hediye; expires=Thu, 30 Dec 2022 12:00:00 UTC";
// oluşturduğum cookie'yi bu şekilde okudum.
const data = document.cookie

// Cookie Set - Get Örneği
// çerezin adı (cname), çerezin değeri (cvalue) ve çerezin süresinin dolmasına kalan gün sayısıdır (exdays)
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    let username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}
checkCookie()
