# `React Component`

- Componentler bağımsız ve yeniden kullanılabilir kod parçalarıdır. JavaScript işlevleriyle aynı amaca hizmet ederler, ancak yalıtılmış olarak çalışırlar ve bir `render()` işlevi aracılığıyla HTML'yi döndürürler.

- Componentler, `Class Components` ve `Function Components` olmak üzere iki türde gelir.

# `Create a Class Component`

- Bir React Component oluştururken bileşenin adı büyük harfle başlamalıdır.

- Component, `extends React.Component` ifadesini içermelidir, bu ifade React.Component için bir miras oluşturur ve bileşeniniz React.Component'in işlevlerine erişim sağlar.

```javascript
class Car extends React.Component {
  render() {
    return <h2> Hi, I am a Car! </h2>;
  }
}
```

- Artık React uygulamanızın `<h2>` ögesini döndüren Car adlı bir component'i var.

- Bu component'i kullanmak için normal HTML ile benzer bir söz dizimi kullanın:

```javascript
const root = ReactDOM.createRoot(document.getElementById('root))
root.render(<Car/>)
```

# `Function Component`

- Function Component bileşeni HTML döndürür ve bir Class Componentiyle hemen hemen aynı şekilde davranır, ancak Function Componentler cok daha az kod kullanılarak yazılabilir, anlaşılması daha kolaydır.

```javascript
function Car() {
  return <h2> Hi, I am a Car! </h2>;
}
```

# `Niçin Function Componentler Class Componentlerin yerini aldı ?`

- Her ikisi de aynı görevi yapmasına rağmen Class Component yerine Function Component kullanmak daha çok tavsiye edilir. Nedenleri ise;

  - Yazması, okunması ve test edilmesi kolaydır
  - Daha az kod yazmanızı sağlar.
  - Daha kolay pratik yapmanızı sağlar.
  - Performans açısından daha verimlidir.
