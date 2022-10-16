# `Lifecycle Methods`

## `Lifecycle of Components`

- React'teki her bileşenin, üç ana aşaması boyunca izleyip değiştirebileceğiniz bir yaşam döngüsü vardır.
- Üç aşama şunlardır: `Mounting`, `Updating`, `Unmounting`

# `Mounting`

- Mounting, ögeleri DOM'a yerleştirmek anlamına gelir.

- React, bir component monte edilirken bu sırayla çağrılan dört yerleşik yönteme sahiptir:

  1. `constructor()`
  2. `getDerivedStateFromProps()`
  3. `render()`
  4. `componentDidMount()`

**_render() yöntemi gereklidir ve her zaman çağrılır, diğerleri isteğe bağlıdır ve siz onları tanımlarsanız çağrılır_**

# `Updating`

- Yaşam döngüsündeki bir sonraki aşama, bir componentin güncellendiği zamandır.

- Componentin durumunda veya donanımlarında bir değişiklik olduğunda bir bileşen güncellenir.

- React, bir component güncellendiğinde bu sırayla çağrılan beş yerleşik yönteme sahiptir:

  1. `getDerivedStateFromProps()`
  2. `shouldComponentUpdate()`
  3. `render()`
  4. `getSnapshotBeforeUpdate()`
  5. `componentDidUpdate()`

**_render() yöntemi gereklidir ve her zaman çağrılır, diğerleri isteğe bağlıdır ve siz onları tanımlarsanız çağrılır_**

# `Unmounting`

- Yaşam döngüsündeki bir sonraki aşama, bir componentin DOM'dan kaldırıldığı veya React'ın onu çağırmayı sevdiği şekilde bağlantısını kaldırmasıdır.

- React, bir componentin bağlantısı kaldırıldığında çağrılan yalnızca bir yerleşik yönteme sahiptir:

  1. `componentWillUnmount()`
