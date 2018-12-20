# react-work-examples

React öğrenirken aldığım ufak notlar ve uygulamalar.

```npm install create-react-app -g``` ile global olarak react olusturma paketini bilgisayara kuruyoruz.

```create-react-app myapp``` - myapp adı altında otomatik olarak bir uygulama olusturuluyor yada . koyarak bulundugu dizine kurar.

```
componentWillMount()   →  bileşen oluşturulmadan önce

componentDidMount()  → bileşen oluşturulduktan sonra

componentWillReceiveProps(newProps)  → yeni props eklenmeden önce

shouldComponentUpdate(newProps, newState) → bileşenin güncellenip güncellenmeyeceği kararı verilir. (default olarak her zaman true döndürür)

componentWillUpdate(nextProps, nextState) → bileşen güncellenmeden önce

componentDidUpdate(prevProps, prevState) → bileşen güncellendikten sonra

componentWillUnmount() → bileşen DOM’dan silinmeden önce

render() → bileşenin render işlemi (return edilecek )
```

```
onChangeFilterText = (e) => {

};
```

Yukarda ki gibi fonksyion yazınca yukarda ekstra bind işlemi yapmaya gerek kalmıyor

yoksa ```constructor``` da 
```
this.onChange = this.onChange.bind(this);
```
böyle bind etmek gerekiyor
