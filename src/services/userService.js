import { users } from "../data/users.js";
import DataError from "../modules/dataError.js";

export default class UserService {//exqort: dışardan import edilebilir demek. default: dışardan import ettiğim zaman default olarak userService import et demek
    constructor(loggerService) {
        this.employees = []
        this.customers = []//buraya veritabanını yazıp projeyi veritabanı ile ilişkilendiririz Bunu usera atarız ki user değişkeni üzerinde veritabanı üzerindeki işlemleri yaparız
        this.errors = []
        this.loggerService = loggerService
    }
    load() {
        for (const user of users) {
            switch (user.type) {//ilgili verinin herhangi bir özelliğine göre 
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }
        }
    }
    //yup-formik react tarafında bir kütüphane
    checkCustomerValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${field} is required.`
                    , user))
            }
        }
        if (Number.isNaN(Number.parseInt(user.age))) {
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number.`
                , user))
        }
        return hasErrors
    }
    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${field}`
                    , user))
            }
        }
        if (Number.isNaN(Number.parseInt(user.age))) {
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number.`
                , user))
        }
        return hasErrors
    }
    add(user) {
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user)
                }
                break;
            default:
                this.errors.push(
                    new DataError("This user can not be added. Wrong user tpe", user))
                break;
        }
        this.loggerService.log(user)
    }
    list() {
        return this.customers
    }
    getById(id) {
        return this.customers.find(u => u.id === id)
    }
    getCustomersSorted() {
        return this.customers.sort((customer1, customer2) => {
            if (customer1.firstName < customer2.firstName) {
                return -1;
            }
            else if (customer1.firstName === customer2.firstName) {
                return 0;
            }
            else {
                return 1;
            }
        })
    }
}