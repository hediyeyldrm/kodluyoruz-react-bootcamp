# `HTTP Request Methods`

## `HTTP Nedir ?`

HTTP `(Hypertext Transfer Protocol)`, istemciler ve sunucular arasında iletişim sağlamak için tasarlanmıştır.
<br>
HTTP, bir istemci ve sunucu arasında bir istek - yanıt
`(request-response)` protokolü olarak çalışır.
<br>
Bir istemci `(browser)`, sunucuya bir HTTP isteği gönderir; daha sonra sunucu, istemciye bir yanıt döndürür. Yanıt, istekle ilgili durum bilgilerini içerir ve ayrıca istenen içeriği de içerebilir.

## `HTTP Methods`
- GET
- POST
- PUT
- HEAD
- DELETE
- PATCH
- OPTIONS
- CONNECT
- TRACE

## `The GET Method`
- **GET**, belirli bir kaynaktan veri istemek için kullanılır.
- Sorgu dizesinin (ad/değer çiftleri) bir **GET** isteğinin URL'sinde gönderilir;
```
/test/demo_form.php?name1=value1&name2=value2
```
## `The POST Method`
- **POST**, bir kaynağı oluşturmak/güncellemek için bir sunucuya veri göndermek için kullanılır.
- **POST** ile sunucuya gönderilen veriler, HTTP isteğinin istek gövdesinde saklanır;
```
POST /test/demo_form.php HTTP/1.1
Host: w3schools.com

name1=value1&name2=value2
```
## `The PUT Method`
- **PUT**, bir kaynağı oluşturmak/güncellemek için bir sunucuya veri göndermek için kullanılır.
- **POST** ve **PUT** arasındaki fark, **PUT** isteklerinin önemsiz olmasıdır. Yani, aynı **PUT** isteğini birden çok kez çağırmak her zaman aynı sonucu verecektir. Buna karşılık, bir **POST** isteğini tekrar tekrar çağırmak, aynı kaynağı birden çok kez oluşturmanın yan etkilerine sahiptir.

## `The HEAD Method`
- **HEAD**, **GET** metodu ile hemen hemen aynıdır, ancak yanıt gövdesi yoktur.
- Başka bir deyişle, **GET /users** bir kullanıcı listesi döndürürse, **HEAD /users** aynı isteği yapar ancak kullanıcı listesini döndürmez.
- **HEAD** istekleri, büyük bir dosyayı veya yanıt gövdesini indirmeden önce olduğu gibi **GET** isteği yapmadan önce **GET** isteğinin ne döndüreceğini denetlemek için kullanışlıdır.

## `The DELETE Method`
- **DELETE** yöntemi, belirtilen kaynağı siler.

## `The PATCH Method`
- **PATCH** yöntemi, bir kaynağa kısmi değişiklikler uygulamak için kullanılır.

## `The OPTIONS Method`
- **OPTIONS** yöntemi, hedef kaynak için iletişim seçeneklerini açıklar.

## `The CONNECT Method`
- **CONNECT** yöntemi, istenen kaynakla iki yönlü bir iletişim başlatmak için kullanılır.

## `The TRACE Method`
- **TRACE** yöntemi, hedef kaynağın yolunu test eden bir mesaj geri döngü testi gerçekleştirmek için kullanılır. (Hata ayıklama amaçları için kullanışlıdır.)