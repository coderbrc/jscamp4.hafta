class Customer {
    constructor(id, customerNumber) {
        this.id = id;
        this.customerNumber = customerNumber;
    }
}
let customer = new Customer(1, "12345");
console.log(customer.customerNumber)
//prototyping 
customer.name = "Burçak Kasap"
console.log(customer.name)
class IndiviualCustomer extends Customer {
    constructor(firstName, id, customerNumber) {
        super(id, customerNumber);
        this.firstName = firstName;
    }
}
class CorporateCustomer extends Customer {
    constructor(companyName, id, customerNumber) {
        super(id, customerNumber);
        this.companyName = companyName
    }
}
//map:listedeki her bir ürün için istenilen yazma işlemini yapar bir nevi foreach görevi görür
let products = [
    { id: 1, name: "Asus", unitPrice: 15000 },
    { id: 2, name: "Acer", unitPrice: 10000 },
    { id: 3, name: "Hp", unitPrice: 20000 },
    { id: 4, name: "Dell", unitPrice: 18000 },
]
//products.map(product=>console.log(`${product.unitPrice}`))
/*products.map(product => {
    console.log(product);
    console.log(`${product.name}`)
})*/
//filter sonucu yeni bir arraydir
let filteredProducts = products.filter(product => product.unitPrice > 12000)
console.log(filteredProducts)
//reduce 0:başlangıç değeri
let cartTotal = products.reduce((acc, product) => acc + product.unitPrice, 0)
console.log(cartTotal)
let cartTotal2 = products.filter(product => product.unitPrice > 15000).map(product => {
    product.unitPrice = product.unitPrice * 1.18
    return product
})
console.log(cartTotal2)


function add(...numbers) {
    for (let i = 0; i < numbers.length; i++)
        total = total + numbers[i];
}
add(20, 30)