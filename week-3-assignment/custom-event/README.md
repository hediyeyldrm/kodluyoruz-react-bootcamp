# `CustomEvent()`

- `CustomEvent()` yapıcısı, yeni bir CustomEvent nesnesi oluşturur.

# `Syntax`

```
new CustomEvent(type)
new CustomEvent(type, options)
```

# `Parameters`

- `type:` Etkinliğin adını içeren bir dizedir. Büyük/küçük harf duyarlıdır ve tarayıcılar bunu her zaman customevent olarak ayarlar.

- `options:` Event() içinde tanımlanan özelliklere ek olarak aşağıdaki özelliklere sahip olabilen bir nesne:

  - `detail:` Olayla ilişkili olaya bağlı bir değer. Bu değer, daha sonra `CustomEvent.detail` özelliği kullanılarak işleyici tarafından kullanılabilir. Varsayılan olarak `null` olur.

# `Return Value`

- Yeni bir CustomEvent nesnesi return eder.

# `Examples`

```javascript
// create custom events -> CustomEvent oluşturma
const catFound = new CustomEvent('animalfound', {
  detail: {
    name: 'cat'
  }
});
const dogFound = new CustomEvent('animalfound', {
  detail: {
    name: 'dog'
  }
});

// add an appropriate event listener -> EventListener ekleme
obj.addEventListener('animalfound', (e) => console.log(e.detail.name));

// dispatch the events -> event'leri gönder
obj.dispatchEvent(catFound);
obj.dispatchEvent(dogFound);

// "cat" and "dog" logged in the console
```

# `Counter Examples`
- id değeri `"counter"` olan span ve bir tanesi artırma diğeri eksiltme olan iki tane buton ekledim. Butonların onclick eventine `counterChange` fonksiyonu ekledim. Fonksiyon parametreleri artırma butonu için `"increment"`, azaltma butonu için `"decrement"` değerlerini verdim.

  ![html](https://user-images.githubusercontent.com/49349272/193821836-02c2934e-56b0-419e-b880-756ef72a5087.png)

- index.js dosyasında yaptıklarımı ise yorum satırlarında belirttim.

  ![js](https://user-images.githubusercontent.com/49349272/193824699-e9fa65d8-ba83-489f-8509-5ae9f2128bc6.png)

- Her dispatch edildiğinde `counterEl`'e bu eventi dinleme görevi vermiş oldum. Gelen datayı `"e.detail"` ile aldım.

  ![function](https://user-images.githubusercontent.com/49349272/193825248-fd2ea615-f04d-4c97-a664-d47611968d98.png)

- Proje için oluşturduğum Counter kısmı bu şekilde görünmektedir.

  ![customEvent](https://user-images.githubusercontent.com/49349272/193816140-43a310f7-155e-4a19-a5f7-bc68cb2a1968.png)
