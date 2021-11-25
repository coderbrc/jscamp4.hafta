/*var,let,const
console.log("Merhaba Kodlama.io")
//js type safe değildir
let dolarBugun=9.30

let dolarDun=9.20
{ 
    let dolarDun=9.10
}
console.log(dolarDun)
const euroDun=11.2
console.log(euroDun)

let users=["Kont kredisi","Emlak Kont Kredisi","Kam Kont Kredisi","Özel Kont Kredisi"]

console.log("<ul>")
for (let i = 0; i < users.length; i++) {
        console.log("</list>"+users[i]+"</li>")
}
console.log("<ul>")*/
let sayi1=10;
sayi1="Engin Demiroğ";
let student={id:1,name:"Engin"}
//console.log(student);
function save(ogrenci,puan=10) {
    console.log(ogrenci.name+":"+puan)
}
//save(student,100);
let students=["aa","bb","cc"];
//console.log(students)
let students2=[student,{id:2,name:"Burçak"}]
//console.log(students2)
//rest paramaters
let showproducts=function(id,...products) {
    console.log(id)
    console.log(products[0])
}
 //showproducts(10,"Elma","Armut","Karpuz")
//spread=ayrıştırmak demek
let points=[1,2,3,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")
//Destructuring parçalamak demek. Elinizdeki arraylarin değişkenlere atama
let populations=[10000,20000,30000]
let[small,medium,high]=populations
//console.log(small)
console.log(medium)
console.log(high)
function somefunction([small1]) {
    console.log(small1)
}
somefunction(populations)
let category={id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name}=category
console.log(id)
console.log(name)
//Redux
