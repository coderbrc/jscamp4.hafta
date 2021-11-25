/*function addToCard(quantity, productName = "Elma") {
    console.log("Sepete eklendi: " + "ürün: " + productName
        + " adet: " + quantity)
}
//addToCard()
addToCard(10)
//addToCard("Karpuz")
let sayHello = () => {//değişkene fonksiyon atadık.Normal bir fonksiyon gibi çalışır.
    console.log("Hello World")
}
sayHello()
let sayHello2 = function () {
    console.log("Hello World 2")
}
sayHello2()
function addToCard2(productName, quantity, unitPrice) {

}
function addToCard3(product) {
    console.log("Ürün: " + product.productName + " Adet: " + product.quantity)
}
let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 }
function addToCard3(product1)
    let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 }
    let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 }
    product2 = product3
    product2.productName = "Karpuz"
    console.log(product3.productName)
//javascriptte sayılar değer tiptir. arraylar ve objeler referans tiplidir.
let sayi1=10
let sayi2=20
sayi1=sayi2
sayi2=100
console.log(sayi1)
function addToCard4 (products) {
    console.log(products)
}
let products=[
    {productName: "Elma", unitPrice: 10, quantity: 5},
    {productName: "Armut", unitPrice: 10, quantity: 5},
    {productName: "Karpuz", unitPrice: 10, quantity: 5}
]
addToCard4(products)
function  add(...numbers) {//üç nokta ile gönderilen parametreleri bir arayin içerisine kapsüller buna rest operatörü denir
    console.log(numbers)
}
add(20,30)
add(20,30,50)
add(20,30,60,80)*/
let numbers = [20, 30, 50, 60]
console.log(...numbers)//burda spread yani ayırma işlemi yaptık. Yani verilen dizideki değişkenleri diziden çıkararak tek tek yazdırdık.
let [icAnadolu, marmara, karadeniz, icAnadoluSehirleri] = [//Destructing bir objedeki veya arraydaki alanları farklı farklı değişkenlere atıp uygulamanın devamında o değişsekn isimleriyle kullanma yöntemidir.
    { name: "IcAnadolu", population: 10 },//Apilerden verileri hızlıca parçalayıp istediğimiz gibi kullanmak için önemlidir
    { name: "Marmara", population: 30 },
    { name: "Karadeniz", population: 5 },
    ["Ankara", "Konya"],
    ["İstanbul,Edirne"],
    ["Ord,Trabzon"]
]
/*console.log(icAnadolu.name + ": " + icAnadolu.population)
console.log(marmara.name + ": " + marmara.population)*/
console.log(icAnadoluSehirleri)