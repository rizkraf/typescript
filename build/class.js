"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
class Admin extends User {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    set email(value) {
        this._email = value;
    }
    get email() {
        return this._email;
    }
}
let admin = new Admin("08212345678", "Adam", 25);
admin.getName();
admin.getRole();
admin.setName("Hori");
admin.phone;
admin.email = "rizky@gmail.com";
console.log(admin.email);
