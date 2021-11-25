//iterate edilen fonksiyonlara kullanılan fonksiyonlardır. map filter ve reudce
//diziler referans tiptir. Referans tipte dizinin adresi yollanır.
let cart = [
    { id: 1, productName: "Telefon", quatity: 3, unitPrice: 4000 },
    { id: 2, productName: "Bardak", quatity: 2, unitPrice: 30 },
    { id: 3, productName: "Kalem", quatity: 1, unitPrice: 20 },
    { id: 4, productName: "Şarj Cihazı", quatity: 2, unitPrice: 100 },
    { id: 5, productName: "Kitap", quatity: 3, unitPrice: 30 },
    { id: 6, productName: "Telefon", quatity: 5, unitPrice: 150 },
]
console.log("<ul>")
//iterasyon yapar arrayi tek tek dolaşır.daha sonra arzu edilirse yeni bir array verir
cart.map(product => {
    console.log("<li" + product.productName + ": " + product.unitPrice * product.quatity + "</li>")
})//burda herbir product için parantezin içindeki işi yap diyoruz.

console.log("</ul>")

let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quatity, 0)//ürünün birim fiyatını akümülatöre ekler. acc ilk değeri 0 olarak atandı.


console.log(total)
let quantityOver2 = cart.filter(product => product.quatity > 2 && product.productName == "Telefon")//filtreleme yapmak için kullanılan yapıdır. Amaç yepyeni bir array oluşturmak
console.log(quantityOver2)

/*stack management:
Spa:single page application tek sayfa uygulama demek*/
function addToCart(sepet) {
    sepet.push({ id: 7, productName: "Ruhsat", quatity: 1, unitPrice: 20 })
}
addToCart(cart)
console.log(cart)
let sayi = 10//değer tip. değer atanır ve işi biter.
function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi)
//fronted uygulamalarda referansı değiştirmek çok önemlidir.
