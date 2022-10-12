# Status Codes Nedir ?

Kullanıcılar bir web sitesini ziyaret etmek istediklerinde iki taraflı bir iletişim ortaya çıkar. Bu iletişimin bir tarafında tarayıcı bulunurken diğer tarafta sunucu yer alır. Bir web sayfasına giriş yapan kullanıcı aslında tarayıcı aracılığıyla ilgili web sayfasının yer aldığı sunucuya sayfayı görüntülemek için bir istek gönderir. Sunucu ise bu isteğe `üç haneli bir durum kodu` ile yanıt verir. Sunucunun tarayıcıya verdiği üç haneli cevaplar `HTTP durum kodları` ya da `HTTP status codes` olarak adlandırılır.

# HTTP Status Code Classes

- <ins><b>1XX:</b></ins> Tarayıcı tarafından gönderilen isteğin sunucuya ulaştığını ve işlemin başladığını bildiren bilgilendirme kodlarını ifade eden durum kodlarıdır.
- <ins><b>2XX:</b></ins> Tarayıcı tarafından gönderilen isteğin sunucuya ulaştığını, anlaşıldığını ve başarılı olduğunu ifade eden durum kodlarıdır.
- <ins><b>3XX:</b></ins> Erişilmek istenen kaynağın başka bir kaynağa taşındığını ve bir yönlendirmenin söz konusu olduğunu ifade eden durum kodlarıdır.
- <ins><b>4XX:</b></ins> İsteğin yerine getirilemediğini, ilgili web sayfasına ya da web sitesine ulaşılamadığını ifade eden durum kodlarıdır.
- <ins><b>5XX:</b></ins> Tarayıcı tarafından gönderilen isteğin başarıyla sunucuya ulaştığını fakat sunucu tarafındaki sorunlar nedeniyle isteğin yerine getirilemediğini ifade eden durum kodlarıdır.

# HTTP Status Codes ve Anlamları

## `1XX Status Codes`

+ <ins><b>`100:`</b></ins> Tarayıcının sunucuya gönderdiği istek başlığının sunucu tarafından alındığını ve istek gövdesinin de alınmaya hazır olduğu anlamına gelir.

+ <ins><b>`101:`</b></ins> Tarayıcının sunucudan protokol değiştirmesini istediği ve sunucunun da bu isteği kabul ettiği anlamına gelir.
+ <ins><b>`103:`</b></ins> Son istek iletisinden önce bazı yanıt başlıklarını döndürdüğü anlamına gelir.

## `2XX Status Codes`

+ <ins><b>`200:`</b></ins> Tarayıcı ve sunucu tarafında her şeyin yolunda olduğu anlamına gelen ideal durum kodudur.
+ <ins><b>`201:`</b></ins> Sunucu tarafından isteğin yerine getirildiği ve yeni bir kaynak oluşturulduğu anlamına gelir.
+ <ins><b>`202:`</b></ins> Sunucunun tarayıcıdan gelen isteği kabul ettiği ve işleme koyduğu anlamına gelir. İstek olumlu ya da olumsuz sonuçlanabilir.
+ <ins><b>`203:`</b></ins> Kaynak sunucudan 200 durum kodu alınmasına rağmen işlem sırasında kaynağın yanıtı değiştirdiği anlamına gelir.
+ <ins><b>`204:`</b></ins> Sunucunun isteği başarıyla işlediği fakat herhangi bir içerik döndürmeyeceğini ifade eder.
+ <ins><b>`205:`</b></ins> 204 durum kodu gibi isteğin başarıyla işlendiği fakat herhangi bir içeriğin döndürülmeyeceği anlamına gelir. Ancak tarayıcının belge görünümünü sıfırlaması gerekir.
+ <ins><b>`206:`</b></ins> Tarayıcının durdurulmuş indirmelere devam etmesini ve indirmeleri birden fazla akışa ayırmasını sağlayan durum kodudur. 

## `3XX Status Codes`

+ <ins><b>`300:`</b></ins> Tarayıcının isteğini yerine getirmek için sunucunun birden fazla olası kaynağa sahip olduğu ve bu kaynaklar arasında seçim yapması gerektiği anlamına gelir.
+ <ins><b>`301:`</b></ins> Bir web sayfası ya da bir kaynağın kalıcı olarak farklı bir kaynağa taşındığını ifade eden durum kodudur. 
+ <ins><b>`302:`</b></ins> Bir web sayfası ya da bir kaynağın geçici olarak farklı bir kaynağa taşındığını ifade eden durum kodudur.
+ <ins><b>`303:`</b></ins> POST, PUT ya da DELETE aracılığıyla tarayıcının talep ettiği kaynağın bulunduğu anlamına gelir. GET kullanarak kaynağı almak için farklı bir URL’ye istekte bulunulması gerekir.
+ <ins><b>`304:`</b></ins> Tarayıcıya önbelleğinde depolanan kaynakların değişmediğini belirten durum kodudur.
+ <ins><b>`307:`</b></ins> Bir kaynağın geçici olarak farklı bir kaynağa taşındığını ifade eden durum kodudur. 302 durum kodundan farklı olarak HTTP yönetiminin değişmesine izin vermez.
+ <ins><b>`308:`</b></ins> Bir kaynağın kalıcı olarak farklı bir kaynağa taşındığını ifade eden durum kodudur. 301 durum kodundan farklı olarak HTTP yönetiminin değişmesine izin vermez.

## `4XX Status Codes`

+ <ins><b>`400:`</b></ins> Sunucunun tarayıcıdaki hata nedeniyle isteği işleyemediği anlamına gelen durum kodudur.
+ <ins><b>`401:`</b></ins> Kullanıcının erişmek istediği kaynak için geçerli kimlik doğrulama bilgilerine sahip olmadığında döndürülen durum kodudur.
+ <ins><b>`402:`</b></ins> Ödeme gerektiği ve gelecekte kullanılmak üzere rezerve edildiği anlamına gelen durum kodudur.
+ <ins><b>`403:`</b></ins> İlgili kaynağa erişimin yasak olduğu durumlarda döndürülen durum kodudur.
+ <ins><b>`404:`</b></ins> İstenen kaynağın sunucuda bulunmadığını ifade eden durum kodudur. En sık görülen HTTP durum kodlarının başında gelmektedir.
+ <ins><b>`405:`</b></ins> İstenilen kaynak için gerçekleştirilen istek yöntemi desteklenmediğinde döndürülen durum kodudur. 
+ <ins><b>`406:`</b></ins> İstemcinin Accept Header bölümünde verilen özelliklerin karşılanmadığını ifade eden durum kodudur.
+ <ins><b>`407:`</b></ins> Bir proxy sunucu ile kimlik doğrulaması ve yetkilendirme gereken durumlarda döndürülen durum kodudur. 
+ <ins><b>`408:`</b></ins> Sunucunun isteği beklerken zaman aşımına uğraması durumunda karşılaşılan durum kodudur.
+ <ins><b>`409:`</b></ins> Bir uyuşmazlık ya da çakışma olması nedeniyle isteğin tamamlanamadığı anlamına gelen durum kodudur.
+ <ins><b>`410:`</b></ins> İstenen kaynağın kalıcı olarak o sunucuda bulunmadığı anlamına gelen durum kodudur. 
+ <ins><b>`411:`</b></ins> İstenen kaynak için belirli bir uzunluk belirtilmediği anlamına gelen durum kodudur.
+ <ins><b>`412:`</b></ins> İstekte bulunan ön koşulların sunucu tarafından karşılanamadığı anlamına gelen durum kodudur.
+ <ins><b>`413:`</b></ins> Yapılan isteğin boyutunun çok büyük olması nedeniyle işlenemediği ve sunucunun isteği kabul edemediği anlamına gelir. 
+ <ins><b>`414:`</b></ins> Sunucunun işleyemeyeceği kadar büyük bir sorgu dizesi olarak kodlanmış GET isteği olduğu durumlarda karşılaşılan durum kodudur.
+ <ins><b>`415:`</b></ins> Gelen isteğin sunucu tarafından desteklenmeyen bir ortam türü içerdiği anlamına gelen durum kodudur.
+ <ins><b>`416:`</b></ins> Dosyanın istenilen bir bölümünü sunucunun sağlayamaması durumunda karşılaşılan durum kodudur.
+ <ins><b>`417:`</b></ins> Sunucunun isteğin bekleme başlığı alanındaki gereksinimleri karşılayamaması durumunda karşılaşılan durum kodudur.
+ <ins><b>`422:`</b></ins> Anlamsal hata içeren istekleri sunucunun işleyemediği anlamına gelen durum kodudur.
+ <ins><b>`425:`</b></ins> Sunucunun yeniden oynatılabilecek istekleri işleme riskini almadığı durumlarda ortaya çıkan durum kodudur. 
+ <ins><b>`426:`</b></ins> İsteğin yükseltme başlığı alanındaki içerikten dolayı farklı bir protokole geçilmesi gereken durumlarda karşılaşılan durum kodudur.
+ <ins><b>`428:`</b></ins> Sunucu isteği işlemeden önce koşulların belirlenmesi gerektiği anlamına gelen durum kodudur.
+ <ins><b>`429:`</b></ins> Kullanıcı belirli  bir süre içerisinde çok fazla istek gönderdiğinde sunucu tarafından hız sınırlayıcı oluşturulduğu anlamına gelen durum kodudur.
+ <ins><b>`431:`</b></ins> Üst bilgi alanlarının büyük olması nedeniyle sunucunun isteği işleyememesi anlamında gelen durum kodudur.

## `5XX Status Codes`

+ <ins><b>`500:`</b></ins> Sunucudaki sorun nedeniyle isteğin tamamlanamadığı durumlarda görülen durum kodudur.  
+ <ins><b>`501:`</b></ins> Sunucunun isteği yönetemediği ya da işlevleri destekleyemediği anlamında gelen durum kodudur.
+ <ins><b>`502:`</b></ins> Sunucunun başka bir sunucuya istek gönderdikten sonra geçersiz yanıt aldığı anlamına gelen durum kodudur. 
+ <ins><b>`503:`</b></ins> Sunucunun geçici olarak hizmet veremediği ve istekleri işleyemediği durumlarda görülen durum kodudur.  
+ <ins><b>`504:`</b></ins> Bir isteği işlerken bir sunucunun diğer sunucudan yanıt beklerken isteğin zaman aşımına uğraması durumunda görülen durum kodudur.
+ <ins><b>`505:`</b></ins> HTTP protokol sürümünün desteklenemediği anlamında gelen durum kodudur.
+ <ins><b>`511:`</b></ins> Kullanılmak istenen ağın isteği sunucuya iletmeden önce kimlik doğrulaması yapması gerektiği durumlarda görülen durum kodudur.  
