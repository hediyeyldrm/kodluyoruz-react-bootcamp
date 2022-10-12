# `FETCH API METHODS`

- Fetch API'yı kullanmak için `fetch()` metoduna istek yapacağımız URL'i parametre olarak vermek gerekiyor.

```
fetch('url')
```

- `fetch()` metodundan sonra, `then()` promise metodunu ekleriz.

```
.then(function() => {

})
```

- “https://jsonplaceholder.typicode.com/todos” adresine `GET` isteğinde bulunalım.

```
fetch("https://jsonplaceholder.typicode.com/todos")
	.then((response) => response.json()) // parse json data
	.then(function (todos) {
		todos.forEach((todo) => {
			console.log(todo.title); // Başlıkları console' a yazdırma
		});
	});
```

- `POST` isteği ile verimizi server'a gönderelim.

```
let payload = {
    title: "Blog Title",
    body: "lorem ipsum",
    userId:1
  }
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
```

## `Kod Bloğu Nasıl Çalışır ?`

- `fetch()` metodu ile URL adresinden istek yapıldı.

```
fetch("https://jsonplaceholder.typicode.com/todos");
```

- Fetch isteği yaptığımızda `then()` fonksiyonunu çağırır.

```
.then((response) => response.json())
```

- Her şey yolunda giderse gelen veri, then içerisinde bize response olarak gelir. Ve response'u parametre olarak alırız. Json içeriğini elde etmek için `.json()` metodunu kullanırız.

```
.then(function(todos){
    todos.forEach(todo => {
        console.log(todo.title);//Başlıkları console' a yazdırma
    });
})
```

- `then()` metodu içerisinde, önceki metottan gelen sonucu alarak console ekranında gösterecek bir fonksiyon yazdık. Bu fonksiyon `todos` adında bir parametre alıyor ve her todos'tan `forEach()` metodu yardımıyla `todos.title` değerini alıp console ekranına yazdırıyoruz.

```
.catch((err) => console.log(err))
```

- En sonunda ise `catch()` metoduyla herhangi bir aşamada hata oluşursa, bu hatayı parametre olarak alıp console ekranına yazdırıyoruz.
