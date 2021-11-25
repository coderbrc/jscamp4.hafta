import { BaseLogger } from "../crossCuttingConcerns/logger.js"
import Customer from "../modules/customer.js"
import User from "../modules/user.js"
import UserService from "../services/userService.js"


console.log("User component loaded...")
let logger1 = new BaseLogger()
let userService = new UserService(logger1)
let user1 = new User(1, "Burçak", "Kasap", "Ankara")
let user2 = new User(2, "Baran", "Gökçekli", "Muğla")
userService.add(user1)
userService.add(user2)
console.log(userService.list())
console.log(userService.getById(2))

userService.list()

let customer = { id: 1, firstName: "Engin" }
//prototyping
customer.lastName = "Demiroğ"
console.log(customer.lastName)

console.log("-----------------")
userService.load()

let customerToAdd=new Customer(1, "Seda", "Yılmaz", "kameka")
customerToAdd.type="customer"
userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())